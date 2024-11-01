import { Button, Card, TextInput } from "flowbite-react"
import { Link, useNavigate } from "react-router-dom"
import { useAuthStore } from "../../../../store/auth/auth.store"
import { loginUser } from "../../services/auth.service"

export const LoginPage = () => {

  const navigate = useNavigate()
  const setToken = useAuthStore(state => state.setToken)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const email = (e.currentTarget.elements[0] as HTMLInputElement).value
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value

    const authRes = await loginUser({ email, password })
    setToken(authRes.token)
    if (authRes.token) navigate("/app/employees")
  }

  return (
    <Card className="w-96 shadow-md flex flex-col gap-4">
      <section className="text-center space-y-2">
        <h1 className="font-bold text-4xl">Iniciar Sesión</h1>
        <p className="font-light text-gray-700">Ingresa tus credenciales correspondientes</p>
      </section>
      <section>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label htmlFor="email" className="space-y-2">
            <span className="font-semibold">Correo electronico</span>
            <TextInput 
              name="email"
              id="email"
              type="email"
              placeholder="example.email@mail.com"
            />
          </label>
          <label htmlFor="password" className="space-y-2">
            <span className="font-semibold">Contraseña</span>
            <TextInput 
              name="password"
              id="password"
              type="password"
              placeholder="********"
            />
          </label>

          <Button type="submit" className="">Ingresar</Button>
        </form>
      </section>
      <section className="text-center">
        <p className="font-normal text-gray-900">¿No tienes cuenta? <Link to="#" className="text-blue-700">Crea una aquí</Link></p>
      </section>
    </Card>
  )
}