import styled, { withTheme } from "styled-components/macro";
import { makeStyles } from "@material-ui/core/styles";

import {
  Grid,
  Card as MuiCard,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider as MuiDivider,
  Typography as MuiTypography,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";
import ArticleData from "./articledata.json";

const Spacer = styled.div(spacing);
const Card = styled(MuiCard)(spacing);
const Divider = styled(MuiDivider)(spacing);
const Typography = styled(MuiTypography)(spacing);

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
  media: {
    height: 100,
  },
});

const Articles = () => {
  const articleClass = useStyles();

  return (
    <Card mb={3}>
      <CardContent>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography variant="body2" gutterBottom>
              <b>Cyber Risks in Singapore</b>
            </Typography>
          </Grid>
          <Spacer mb={6} />
          {ArticleData.articles.map((article) => (
            <Grid item xs={4} sm={4} md={4} lg={2} key={article.id}>
              <Card className={articleClass.root}>
                <CardActionArea
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ height: 225 }}
                >
                  <CardMedia
                    component="img"
                    className={articleClass.media}
                    image={article.image}
                  />
                  <Spacer mb={2} />
                  <Typography variant="body1" component="div">
                    {article.title}
                  </Typography>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default withTheme(Articles);
