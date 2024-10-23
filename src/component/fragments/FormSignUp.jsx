
import Button from "../elements/button";
import LabeledInput from "../elements/LabeledInput"

const FormSignUp = () => {
  return (
    <form action="">
      <div className="mb-6">
        <LabeledInput
          label="Name"
          type="text"
          placeholder="John Doe"
          name="name"
        />
      </div>
      <div className="mb-6">
        <LabeledInput
          label="Email Address"
          type="email"
          placeholder="hello@example.com"
          name="email"
        />
      </div>
      <div className="mb-6">
        <LabeledInput
          label="Password"
          type="password"
          placeholder="*************"
          name="password"
        />
      </div>
      <Button variant="bg-[#]w-full299D91  text-white" type="submit">
        Sign Up
      </Button>
    </form>
  );
};

export default FormSignUp;
