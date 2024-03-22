import Image from "next/image";
import { InputOTPForm } from "./OTP";

export default function Home() {
  return (
      <div className="flex justify-center items-center m-8">
          <InputOTPForm></InputOTPForm>
      </div>

  )
}
