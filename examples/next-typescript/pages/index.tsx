import React from "react";
import { Link, useTheme, useThemeDetector } from "@musy-app/groovy";
import { Button } from "@musy-app/groovy/";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  const { defaultThemes, storedTheme, setStoredTheme } = useTheme();

  const isDarkTheme = useThemeDetector();

  return (
    <>
      <h1>Index</h1>

      <br />

      <p>
        Your stored theme is:{" "}
        {
          {
            0: "System",
            1: "Light",
            2: "Dark",
            default: "Unknown",
          }[storedTheme]
        }
      </p>
      <p>Your theme is: {isDarkTheme ? "dark" : "light"}</p>

      <br />

      <div>
        <Button onClick={() => setStoredTheme(0)}>System</Button>
        <Button onClick={() => setStoredTheme(defaultThemes.light.id)}>
          Light
        </Button>
        <Button onClick={() => setStoredTheme(defaultThemes.dark.id)}>
          Dark
        </Button>
      </div>

      <br />

      <Link href={"/form"}>Form</Link>
    </>
  );
};

export default IndexPage;
