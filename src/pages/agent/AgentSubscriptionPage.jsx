import Button from "../../components/general/Button";

export default function AgentSubscriptionPage() {
  return (
    <div className="min-h-screen bg-BGSecondary p-4 pt-16 ">
      <h1 className="lg:mt-44 lg:ml-60 text-4xl font-bold text-TextTertiary">
        Subscription Details
      </h1>
      <div className=" lg:px-60 ">
        <div className="mt-10 flex w-full flex-col gap-5">
          <div className="w-12/12 flex ">
            <div className=" flex w-1/3 items-center">
              <label className=" text-1xl font-bold  text-TextTertiary ">
                Subscription Plan
              </label>
            </div>
            <div className="items-left flex w-1/3 ">
              <p>Starter</p>
            </div>
            <div className="flex h-1 w-1/6 lg:w-1/5 gap-2 ">
              <Button text="Change" fontsize="text-xs" />

              <Button
                text="Cancel"
                fontsize="text-xs"
                bgcolor="bg-BtnTertiary-end"
              />
            </div>
          </div>

          <div className="flex w-full ">
            <div className="  flex w-1/3 items-center">
              <label className=" text-1xl font-bold  text-TextTertiary ">
                Account Name
              </label>
            </div>
            <div className="items-left flex w-1/3">
              <p>Tina Turner</p>
            </div>
          </div>

          <div className="w-12/12  flex ">
            <div className="  flex w-1/3 items-center">
              <label className=" text-1xl font-bold  text-TextTertiary ">
                Start Date
              </label>
            </div>
            <div className="items-left flex w-1/3">
              <p>September 29, 2022</p>
            </div>
          </div>

          <div className="w-12/12 flex">
            <div className=" flex w-1/3 items-center">
              <label className=" text-1xl font-bold  text-TextTertiary ">
                Next Billing Date
              </label>
            </div>
            <div className="items-left flex w-1/3">
              <p>October 29, 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
