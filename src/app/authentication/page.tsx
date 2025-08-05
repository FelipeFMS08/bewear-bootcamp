
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import SignInForm from "./components/sign-in-form"
import SignUpForm from "./components/sign-up-form"
import { Header } from "@/components/common/header"

const Authentication =  async () => {
  return (
    <>
    <Header />

    <div className="flex flex-col gap-6 p-5 w-full">
      <Tabs defaultValue="sign-in" className="w-full">
        <TabsList>
          <TabsTrigger value="sign-in">Entrar</TabsTrigger>
          <TabsTrigger value="sign-up">Criar conta</TabsTrigger>
        </TabsList>
        <TabsContent value="sign-in" className="w-full">
          <SignInForm />
        </TabsContent>
        <TabsContent value="sign-up">
          <SignUpForm />
        </TabsContent>
      </Tabs>
    </div>
    </>
  )
}

export default Authentication;