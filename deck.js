import { slides as intro } from "./topics/intro.mdx";
import { slides as awsIntro } from "./topics/aws-intro.mdx";
import { slides as lex } from "./topics/lex.mdx";
import { slides as dynamo } from "./topics/dynamo.mdx";
import { slides as lambda } from "./topics/lambda.mdx";

export { default as theme } from "@jakepartusch/opi-mdx-theme";
export const slides = [...intro, ...awsIntro, ...lex, ...dynamo, ...lambda];
