import React from "react";
import { MoreInfoStyle } from "./MoreInfo.styles";
import { renderTextWithFriday } from "../../utils/helperFunctions";
import { FridayStyle } from "../Question/Question.styles";
import { LinkStyle } from "../../utils/GeneralStyles";

export const MoreInfo = () => {
  return (
    <MoreInfoStyle>
      <p>
        {renderTextWithFriday(
          "In 2017, my friend David Paradise showed a cool website that gives\n" +
            "        you reasons why not to deploy on a Friday."
        )}
      </p>
      <p>
        {renderTextWithFriday(
          "I can't find this website anymore. Yet, people remained to deploy\n" +
            "and release on a Friday. So I decided to re-create the website to remind you all why you should not deploy on a "
        )}
        <FridayStyle>Friday</FridayStyle>.
      </p>

      <code>
        To contribute to the reasons DB, please raise a PR on{" "}
        <LinkStyle href="https://github.com/bnbarak/dont-deploy-on-friday/blob/master/CONTRIBUTE.md">
          GitHub
        </LinkStyle>{" "}
        with your reasons why not to deploy and release on a Friday.
      </code>

      <p>I hope I saved you a long Friday Night at the [home] office,</p>
      <p>Barak Ben Noon</p>
    </MoreInfoStyle>
  );
};
