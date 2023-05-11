import React from "react";
import { Button } from "@musy-app/groovy";
import { NextPage } from "next";

const FormPage: NextPage = () => {
  return (
    <>
      <h1>Form</h1>

      <br />

      <h2>sizes</h2>
      <div>
        <Button size={"xs"}>xs button</Button>
        <Button size={"sm"}>sm button</Button>
        <Button size={"md"}>md button (default)</Button>
        <Button size={"lg"}>lg button</Button>
      </div>

      <br />

      <h2>types</h2>
      <div>
        <Button type={"primary"}>primary button (default)</Button>
        <Button type={"secondary"}>secondary button</Button>
        <Button type={"success"}>success button</Button>
        <Button type={"warning"}>warning button</Button>
        <Button type={"danger"}>danger button</Button>
        <Button type={"contrast"}>contrast button</Button>
        <Button type={"white"}>white button</Button>
        <Button type={"black"}>black button</Button>
      </div>

      <br />

      <h3>icons</h3>
      <div>
        <Button leftIcon={"👈"} size={"sm"}>
          left icon
        </Button>
        <Button rightIcon={"👉"}>right icon</Button>
        <Button leftIcon={"👈"} rightIcon={"👉"} size={"lg"}>
          left and right icon
        </Button>
      </div>

      <br />

      <h2>variants</h2>
      <div>
        <Button shape={"rounded"} variant={"solid"}>
          solid button (default)
        </Button>
        <Button variant={"link"}>link button</Button>
        <Button variant={"outline"}>outline button</Button>
        <Button variant={"ghost"}>ghost button</Button>
      </div>

      <br />

      <h2>shapes</h2>
      <div>
        <Button shape={"pill"}>pill button (default)</Button>
        <Button shape={"rounded"}>rounded button</Button>
      </div>

      <br />

      <h2>states</h2>
      <h3>loading</h3>
      <div>
        <Button shape={"rounded"} loading={true}>
          loading button
        </Button>
        <Button loading={true} loadingText={"custom loading text..."}>
          loading button with text
        </Button>
        <Button shape={"rounded"} loading={true} spinnerPlacement={"right"}>
          loading button with right spinner
        </Button>
        <Button loading={true} spinner={<></>}>
          loading button with custom spinner
        </Button>
      </div>

      <h3>disabled</h3>
      <div>
        <Button shape={"rounded"} disabled={true}>
          disabled button
        </Button>
      </div>

      <h3>active</h3>
      <div>
        <Button active={true}>active button</Button>
      </div>
    </>
  );
};

export default FormPage;
