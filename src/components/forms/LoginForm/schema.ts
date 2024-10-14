import * as yup from "yup";

export const loginSchema = yup
  .object({
    // phoneNumber: yup
    //   .string()
    //   .matches(/^[0-9]+$/, "Nomor Telepon harus berupa angka")
    //   .required("Mohon isi kolom Nomor Telepon"),
    email: yup.string().email().required("Email tidak boleh kosong"),
    password: yup.string().required("Password tidak boleh kosong"),
  })
  .required();
