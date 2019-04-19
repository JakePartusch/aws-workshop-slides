import { slides as intro } from "./topics/intro.mdx";
import { slides as awsIntro } from "./topics/aws-intro.mdx";
import { slides as lex } from "./topics/lex.mdx";
import { slides as dynamo } from "./topics/dynamo.mdx";
import { slides as lambda } from "./topics/lambda.mdx";
import { slides as awsConclusion } from "./topics/aws-conclusion.mdx";
import { slides as demo } from "./topics/demo.mdx";

import opiTheme from "@jakepartusch/opi-mdx-theme";
import { syntaxHighlighter } from "mdx-deck/themes";

export const themes = [syntaxHighlighter, opiTheme];

export const slides = [
  ...intro,
  ...awsIntro,
  ...lex,
  ...dynamo,
  ...lambda,
  ...awsConclusion,
  ...demo
];
