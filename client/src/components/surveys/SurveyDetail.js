import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import _ from "lodash";

import palette from "../../utils/palette";

import { PieChart, Pie, Tooltip, Cell } from "recharts";
import {
  List,
  ListItem,
  ListItemText,
  Grid,
  Paper,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import formFields from "./formFields";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

const SurveyDetail = (props) => {
  const classes = useStyles();
  console.log(props);
  const [key, setKey] = useState(1);

  const data = [
    { name: "Yes", value: 23 },
    { name: "No", value: 37 },
    { name: "N/A", value: 23 },
  ];

  useEffect(() => {
    setKey(2);
  });

  return (
    <Grid>
      <List>
        <ListItem>
          <ListItemText primary="Title" secondary={props.title}></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Subject"
            secondary={props.subject}
          ></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText primary="Body" secondary={props.body}></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Date Sent"
            secondary={new Date(props.dateSent).toLocaleString()}
          ></ListItemText>
        </ListItem>
      </List>
      <PieChart width={600} height={400}>
        <Pie
          key={key}
          label={({
            cx,
            cy,
            midAngle,
            innerRadius,
            outerRadius,
            value,
            index,
          }) => {
            const RADIAN = Math.PI / 180;
            // eslint-disable-next-line
            const radius = 25 + innerRadius + (outerRadius - innerRadius);
            // eslint-disable-next-line
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            // eslint-disable-next-line
            const y = cy + radius * Math.sin(-midAngle * RADIAN);

            return (
              <text
                x={x}
                y={y}
                fill={palette.secondary}
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
              >
                {data[index].name} ({value})
              </text>
            );
          }}
          dataKey="value"
          data={data}
          cx={200}
          cy={200}
          innerRadius={80}
          outerRadius={120}
          fill={palette.primary}
        />
        <Tooltip />
      </PieChart>
    </Grid>
  );
};

export default SurveyDetail;
