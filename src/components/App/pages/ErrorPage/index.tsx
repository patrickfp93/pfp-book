import { useRouteError } from "react-router-dom";
import { Container, Content, FlexboxGrid, Panel } from "rsuite";
import "./index.less";

import { BiSolidError } from "react-icons/bi";

export default function ErrorPage() {
  const error : any = useRouteError();
  return (
    <Container>
      <Content>
        <FlexboxGrid justify="center" align="middle">
          <FlexboxGrid.Item colspan={12}>
          <Panel className="panel" header={<h3>404 - Not Found!</h3>} bordered>
              <p><BiSolidError />{error.data}<BiSolidError /></p>
            </Panel>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Content>
    </Container>
  );
}