import React from "react";

export const options = {sorting: true,
                        headerStyle: {color: '#193d66',},
                        actionsColumnIndex: -1,
                        };
export const actions=[
        {
            icon: 'save',
            tooltip: 'Save User',
            iconProps: { style: { fontSize: "20px", color: "#ac145a" } },
            onClick: () => window.print(),
        },

        {
            icon: 'VisibilityIcon',
            tooltip: 'View Appointment',
            iconProps: { style: { fontSize: "20px", color: "#ac145a" } },
            onClick: (event, rowData) => alert("View appointment for " + rowData),
        }           ];

export const localization={
    header:{actions:<h4>Actions</h4>},
    body: {emptyDataSourceMessage: <h4 style={{color: "#ac145a"}}>No records to display</h4>},
                            };