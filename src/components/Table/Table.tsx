import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React, { useContext } from "react";
import cx from "classnames";
import { MainContext } from "../../context/main.context";
import { useStyles } from "./Table.styles";

interface TableProps {}

export const TablePicker: React.FC<TableProps> = ({}) => {
  const classes = useStyles();
  const mainContext = useContext(MainContext);

  const headCells =
    mainContext.centerDisplay === "Movement"
      ? [
          {
            id: "name",
            numeric: false,
            disablePadding: true,
            label: "Name",
          },
        ]
      : [
          {
            id: "name",
            numeric: false,
            disablePadding: true,
            label: "Name",
          },
          {
            id: "infected",
            numeric: true,
            disablePadding: true,
            label: "Cases",
          },
          {
            id: "deaths",
            numeric: true,
            disablePadding: true,
            label: "Deaths",
          },
        ];

  const isSelected = (name: string) =>
    mainContext.selected.indexOf(name) !== -1;

  function EnhancedTableHead() {
    return (
      <TableHead>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={"left"}
              padding={"none"}
              className={classes.tableHead}
            >
              {headCell.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }

  function EnhancedTableRows() {
    return (
      <TableBody>
        {mainContext.tableData.map((row, index) => {
          const isItemSelected = isSelected(row.country);
          const labelId = `enhanced-table-checkbox-${index}`;

          return (
            <TableRow
              role="checkbox"
              tabIndex={-1}
              key={index}
              onClick={(event) => mainContext.handleSelectedChange(row.country)}
              className={isItemSelected ? classes.active : classes.tableRow}
            >
              <TableCell
                component="th"
                id={labelId}
                scope="row"
                padding="none"
                className={cx(
                  classes.tableCell,
                  classes.tableCellName,
                  classes.tableCellFirst
                )}
              >
                {row.country}
              </TableCell>
              {mainContext.centerDisplay === "Movement" ? null : (
                <>
                  <TableCell
                    align="right"
                    className={cx(classes.tableCell, classes.infected)}
                  >
                    <Typography className={classes.cellValue}>
                      {row.cases.toLocaleString()}
                    </Typography>
                    <Typography className={classes.cellChange}>
                      {"+" + row.todayCases.toLocaleString()}
                    </Typography>
                  </TableCell>
                  <TableCell
                    align="right"
                    className={cx(classes.tableCell, classes.deaths)}
                  >
                    <Typography className={classes.cellValue}>
                      {row.deaths.toLocaleString()}
                    </Typography>
                    <Typography className={classes.cellChange}>
                      {"+" + row.todayDeaths.toLocaleString()}
                    </Typography>
                  </TableCell>
                </>
              )}
            </TableRow>
          );
        })}
      </TableBody>
    );
  }
  return (
    <>
      <div className={classes.container}>
        <TableContainer className={classes.tableContainer}>
          <Table size="small" stickyHeader>
            <EnhancedTableHead />
            <EnhancedTableRows />
          </Table>
        </TableContainer>
      </div>
      <Grid container spacing={0}>
        {mainContext.centerDisplay === "Movement" ? (
          <Grid item lg={4} md={4}>
            <div
              className={cx(
                classes.tableChanger,
                mainContext.showTableData === "Movement" && classes.active
              )}
              id="Movement"
              onClick={(event) => {
                mainContext.handleTableChange(event.currentTarget.id);
              }}
            >
              <Typography className={classes.tableChangerValue}>
                Movement
              </Typography>
            </div>
          </Grid>
        ) : (
          <>
            <Grid item lg={4} md={4}>
              <div
                className={cx(
                  classes.tableChanger,
                  mainContext.showTableData === "Countries" && classes.active
                )}
                id="Countries"
                onClick={(event) => {
                  mainContext.handleTableChange(event.currentTarget.id);
                }}
              >
                <Typography className={classes.tableChangerValue}>
                  Countries
                </Typography>
              </div>
            </Grid>
            <Grid item lg={4} md={4}>
              <div
                className={cx(
                  classes.tableChanger,
                  mainContext.showTableData === "USA" && classes.active
                )}
                id="USA"
                onClick={(event) => {
                  mainContext.handleTableChange(event.currentTarget.id);
                }}
              >
                <Typography className={classes.tableChangerValue}>
                  USA
                </Typography>
              </div>
            </Grid>
            <Grid item lg={4} md={4}>
              <div
                className={cx(
                  classes.tableChanger,
                  mainContext.showTableData === "Continents" && classes.active
                )}
                id="Continents"
                onClick={(event) => {
                  mainContext.handleTableChange(event.currentTarget.id);
                }}
              >
                <Typography className={classes.tableChangerValue}>
                  Continents
                </Typography>
              </div>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
};
