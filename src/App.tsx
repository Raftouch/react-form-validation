import { useState } from 'react'
import FormInput from './components/FormInput'

interface FormValues {
  [value: string]: string
}

function App() {
  const [values, setValues] = useState<FormValues>({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: '',
  })

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      label: 'Username',
      errorMsg: 'Min 3, max 16, no special characters',
      required: true,
      pattern: '[A-Za-z0-9]{3,16}$',
    },
    {
      id: 2,
      name: 'email',
      type: 'email', // pattern not needed, as type = email
      placeholder: 'Email',
      label: 'Email',
      errorMsg: 'should be valid email address',
      required: true,
    },
    {
      id: 3,
      name: 'birthday',
      type: 'date',
      placeholder: 'Birthday',
      label: 'Birthday',
      errorMsg: '',
    },
    {
      id: 4,
      name: 'password',
      type: 'text',
      placeholder: 'Password',
      label: 'Password',
      errorMsg:
        'Minimum 8, max 20, should include at least 1 letter, 1 number and 1 special character',
      required: true,
      pattern:
        '(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$',
    },
    {
      id: 5,
      name: 'confirmPassword',
      type: 'text',
      placeholder: 'Confirm Password',
      label: 'Confirm Password',
      errorMsg: "Passwords don't match",
      required: true,
      pattern: values.password,
    },
  ]

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // const data = new FormData(e.currentTarget)
    // console.log(Object.fromEntries(data.entries()))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }
  console.log(values)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={handleChange}
          />
        ))}

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
