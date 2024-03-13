import { useLocation } from "react-router-dom"
import Button from "../comonents/ui/Button"
import Input from "../comonents/ui/Input"

const LoginPage = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
        <h2 className="mb-3 text-center">Login to Contribute</h2>
        <form className="max-w-sm mx-auto space-y-3">
        <Input type="email" placeholder="Email address" />
        <Input type="password" placeholder="Password" />

        <Button>Login</Button>
      </form>

    </div>
  )
}

export default LoginPage