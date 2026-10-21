import { redirect } from "next/navigation";

// /projects ya no existe como página aparte: la home es la página de proyectos.
export default function Projects() {
  redirect("/");
}
