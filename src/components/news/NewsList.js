import { Grid } from "@mui/material";
import NewsCard from "./NewsCard";
import { Box, Typography } from "@mui/material";

export default function NewsList(props) {
  return (
    <Box>
      <Typography
        variant="h5"
        fontWeight={600}
        gutterBottom
      >
        Lastest News
      </Typography>
      <Grid container spacing={2}>
        {props.data.map((news, index) => {
          return (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={2} mb={5}>
              <NewsCard key={index} news={news} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}