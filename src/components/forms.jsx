import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  name: yup.string().required("Preencha seu nome"),
  email: yup
    .string()
    .email("Informe um e-mail válido")
    .required("Informe seu email"),
  level: yup.string(),
  character: yup.string(),
});

export const Form = () => {
  const formik = useFormik({
    onSubmit: async (values) => {
      const res = await axios({
        method: "post",
        baseURL: "http://localhost:2000",
        url: "/users",
        data: values,
      });

      console.log(res.data);
    },
    initialValues: {
      name: "",
      email: "",
      level: "",
      character: "",
    },
    validationSchema,
  });

  return (
    <section className="min-h-[850px] flex flex-col items-center static before:h-[850px] before:content-[''] before:w-full before:absolute before:bg-form before:bg-cover before:saturate-0 before:bg-no-repeat before:bg-center before:opacity-20">
      <article className="absolute">
        <h1 className="max-w-[700px] font-archivo font-normal text-5xl text-root-primary text-center mx-auto pb-10">
          O clube Dungeons & Dragons
        </h1>
        <p className="max-w-[1000px] mx-auto font-libre text-root-field text-base text-center pb-24">
          Para deter Vecna, os heróis de Stranger Things também precisam de
          você. O Clube de D&D mais famoso de Hawkings está com vagas abertas
          para sua próxima aventura. Se você é destemido, gosta de desafios e
          não tem medo de rodar o D20, chegou a hora de se inscrever para fazer
          parte da nova campanha.
        </p>
        <div className="flex flex-row justify-between items-center">
          <h3 className="uppercase max-w-[400px] font-archivo font-normal text-5xl text-root-field pb-10">
            Entre para o clube de D&D e tenha experiências de
            <span className="text-root-primary">outro mundo</span>.
          </h3>
          <div className="basis-1/2 bg-root-field">
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col bg-root-primary p-6 text-root-contrast relative bottom-6 right-6"
            >
              <label htmlFor="name" className="pb-2">
                Nome Completo
              </label>
              <input
                type="text"
                name="name"
                id="txtName"
                className="bg-root-field border-root-contrast border-2 h-10"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              <label htmlFor="email" className="pt-6 pb-2">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                id="txtEmail"
                required
                className="bg-root-field border-root-contrast border-2 h-10"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              <label htmlFor="level" className="pt-6 pb-2">
                Level
              </label>
              <input
                type="text"
                name="level"
                id="txtLevel"
                className="bg-root-field border-root-contrast border-2 h-10"
                value={formik.values.level}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              <label htmlFor="character" className="pt-6 pb-2">
                Personagem
              </label>
              <textarea
                cols="30"
                rows="10"
                id="txtCharacter"
                name="character"
                className="bg-root-field border-root-contrast border-2 h-24"
                value={formik.values.character}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>

              <button
                type="submit"
                className="uppercase bg-root-field text-root-contrast hover:bg-root-contrast hover:text-root-field duration-1000 font-archivo w-48 self-center py-3 px-7 mt-6"
              >
                Me inscrever
              </button>
            </form>
          </div>
        </div>
      </article>
    </section>
  );
};
