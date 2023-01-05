import IconAlert from "../../../assets/icons/IconAlert";

export default function VerificationFailed() {
  return (
    <div className="flex items-center justify-center text-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h3 className="text-5xl font-medium">Email Verification Failed!</h3>
        <div className="text-BtnTertiary-start">
          <IconAlert width="120" height="120" />
        </div>
        <p className="text-xl">you link has expired, please try again</p>
      </div>
    </div>
  );
}
