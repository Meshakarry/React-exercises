import { useReducer } from 'react';

import InputForm from '../components/Generic/InputForm';
import Input from '../components/Generic/Input';
import InputRadio from '../components/Generic/InputRadio';
import InputCheckbox from '../components/Generic/InputCheckbox';
import InputFile from '../components/Generic/InputFile';
import InputTextarea from '../components/Generic/InputTextarea';
import InputDropdown from '../components/Generic/InputDropdown';

export const PER_PAGE_OPTIONS = [
  { label: '8', value: 8 },
  { label: '12', value: 12 },
  { label: '24', value: 24 },
  { label: '36', value: 36 },
]


const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  gender: 'male',
  subject: 'English',
  resume: null,
  url: '',
  perPage: 8,
  about: '',
};

type Action =
  | { type: 'SET_FIELD'; field: keyof typeof initialState; value: string | number | File }
  | { type: 'RESET' };

function formReducer(state: typeof initialState, action: Action) {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export default function FormSubmission () {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleInputChange = (field: keyof typeof initialState, value: string | number | File) => {
    dispatch({ type: 'SET_FIELD', field, value });
  };

  const handleFormSubmit = () => {
    console.log('test', state)
  }

  return (
    <InputForm formTitle="Here goes the forma!" action={handleFormSubmit}>
      <div className="flex flex-col gap-2.5 px-5">
        <Input
          id="first-name"
          label="First Name"
          placeholder="Enter first name"
          name="firstName"
          value={state.firstName}
          onInput={(e: any) => handleInputChange("firstName", e.target.value)}
        />

        <Input
          id="last-name"
          label="Last name"
          placeholder="Enter last name"
          name="lastName"
          value={state.lastName}
          onInput={(e: any) => handleInputChange("lastName", e.target.value)}
        />

        <Input
          id="email"
          label="Email"
          placeholder="Enter email"
          type="email"
          name="email"
          value={state.email}
          onInput={(e: any) => handleInputChange("email", e.target.value)}
        />

        <Input
          id="phone"
          label="Contact"
          placeholder="Enter Mobile number"
          type="tel"
          name="phone"
          value={state.phone}
          onInput={(e: any) => handleInputChange("phone", e.target.value)}
        />

        <div className="flex justify-center gap-3 flex-wrap">
          <h2 className="font-bold text-md basis-full">Gender *</h2>

          {['male', 'female', 'other'].map((g) => (
            <InputRadio
              key={g}
              id={g}
              name="gender"
              title={g[0].toUpperCase() + g.slice(1)}
              value={g}
              checked={state.gender === g}
              onChange={() => handleInputChange('gender', g)}
            />
          ))}

        </div>

        <div className="flex justify-center gap-3 flex-wrap">
          <h2 className="font-bold text-md basis-full">Your best subject</h2>
          {['English', 'Maths', 'Science'].map((subject) => (
            <InputCheckbox
              key={subject}
              id={subject.toLowerCase()}
              label={subject}
              checked={state.subject === subject}
              onChange={() => handleInputChange("subject", subject)}
            />
          ))}
        </div>

        <InputFile
          id="upload-file"
          label="Upload resume"
          onChange={(files) => handleInputChange("resume", files?.[0] ?? '')}
        />

        <Input
          id="url"
          label="Url"
          placeholder="Enter url"
          type="url"
          value={state.url}
          onInput={(e: any) => handleInputChange("url", e.target.value)}
        />

        <InputDropdown
          id="per_page"
          label="Select your choice"
          options={PER_PAGE_OPTIONS}
          className="flex-col [&>div]:w-full [&_select]:w-full [&_select]:min-h-[50px]"
          onChange={(value: number) => handleInputChange("perPage", value)}
        />

        <InputTextarea
          id="about"
          label="About"
          placeholder="About your self"
          rows={5}
          value={state.about}
          onInput={(e: any) => handleInputChange("about", e.target.value)}
        />

        <div>
          <h3 className="font-semibold text-md mb-4">Submit or reset</h3>
          <div className="grid grid-cols-2 gap-6">
            <button 
              type="button"
              className="rounded-2xl bg-green-400 p-4 text-white"
              onClick={() => dispatch({ type: 'RESET' })}
            >
              Reset
            </button>

            <button 
              type="submit"
              className="rounded-2xl bg-green-400 p-4 text-white"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </InputForm>
  )
}
