import * as React from "react";

import Article from "./Article";
import moment from "moment";
import PostDate from "./PostDate";
import Text from "./Text";
import Title from "./Title";
import MaximizeButton from "./MaximizeButton";
import * as Api from "../../Api";

interface IProps {
  title: string;
  date: string;
  language: string;
  framework: string;
  file: string;
  votes: number;
}

const Post: React.FunctionComponent<IProps> = ({ title, date, votes, file }) => {

  const [isMaximized, setIsMaximized] = React.useState(false);
  const [innerHtml, setInnerHtml] = React.useState("");

  React.useEffect(() => {
    (async() => {
      if(file !== "") {
        const html = (await Api.getAll<{html: string}>(Api.postsroute + file)).html;
        setInnerHtml(html);
      }
    })();
  }, [innerHtml, file]);

  return (
    <Article isMaximized={isMaximized} >
      <PostDate>Date: {moment(new Date(date)).format("DD-MMM-YYYY")}</PostDate>
      <Title>{title}</Title>

      <Text dangerouslySetInnerHTML={{__html: innerHtml}}>
      </Text>
      <MaximizeButton onClick={() => setIsMaximized(!isMaximized)}>
        {
          !isMaximized ? 
          "Continue reading..."
          : "Stop reading"
        }
      </MaximizeButton>
    </Article>
  )
}

export default Post;