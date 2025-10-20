interface InputFormProps {
  formTitle: string
  action: string | (() => void)
  method?: string
  children: React.ReactNode
}

export default function InputForm ({ formTitle, action, children, method }: InputFormProps) {

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h1 className="text-center text-green-400 font-bold mb-5">{ formTitle }</h1>
      <form action={action} noValidate method={method}>
        { children }
      </form>
    </div>
  )
}
