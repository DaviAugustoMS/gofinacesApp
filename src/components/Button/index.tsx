import React from "react";

import { ButtonContent, Text } from "./styles";

type ButtonProps = {
  income: boolean;
};
export function Button({ income }: ButtonProps) {
  return (
    <>
      {income ? (
        <ButtonContent>
          <Text>Income</Text>
        </ButtonContent>
      ) : (
        <ButtonContent>
          <Text>Outcome</Text>
        </ButtonContent>
      )}
    </>
  );
}
