import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import * as yup from "yup";
import Button from "../Button";
import Container from "../Container";
import Heading from "../Heading";
import styles from "./styles.module.scss";

export default function NewsLatter() {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });

  //Receber os dados do formulário
  const valueInput = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  //Enviar os dados para o back-end
  const addUser = async (e) => {
    e.preventDefault();

    if (!(await validate())) return;

    const saveDataForm = true;

    if (saveDataForm) {
      setStatus({
        type: "success",
        mensagem: "Usuário cadastrado com sucesso!",
      });
      setUser({
        name: "",
        email: "",
      });
    } else {
      setStatus({
        type: "error",
        mensagem: "Usuário não cadastrado com sucesso!",
      });
    }

    axios
      .post("https://corebiz-test.herokuapp.com/api/v1/newsletter", {
        "email": user.email,
        "name": user.name,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {console.log(error);});
      
  };

  async function validate() {
    let schema = yup.object().shape({
      email: yup
        .string("Necessário preencher o campo e-mail!")
        .required("Necessário preencher o campo e-mail!")
        .email("Necessário preencher o campo com e-mail válido!"),
      name: yup
        .string("Necessário preencher o campo nome!")
        .required("Necessário preencher o campo nome!"),
    });

    try {
      await schema.validate(user);
      return true;
    } catch (err) {
      setStatus({
        type: "error",
        mensagem: err.errors,
      });
      return false;
    }
  }

  return (
    <Box className={styles.container}>
      <Container>
        <Box className={styles.newsLatterWrapper}>
          <Heading color="#333333" fontSize={22} fontWeight={700}>
            Participe de nossas news com promoções e novidades!
          </Heading>

          <form onSubmit={addUser}>
            <input
              type="text"
              name="name"
              placeholder="Digite seu nome"
              onChange={valueInput}
              value={user.name}
            />

            <input
              type="email"
              name="email"
              placeholder="Digite seu email"
              onChange={valueInput}
              value={user.email}
            />

            <Button
              backgroundColor="#000000"
              color="#ffffff"
              fontWeight={700}
              type="submit"
            >
              Eu quero!
            </Button>
          </form>

          {status.type === "success" ? (
            <p className={styles.sucess}>{status.mensagem}</p>
          ) : (
            ""
          )}
          {status.type === "error" ? (
            <p className={styles.error}>{status.mensagem}</p>
          ) : (
            ""
          )}
        </Box>
      </Container>
    </Box>
  );
}
