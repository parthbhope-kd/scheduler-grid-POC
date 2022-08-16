import React from "react";
import "../../../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-calendars/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-popups/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-react-grids/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-grids/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-react-treegrid/styles/material.css";

import "../../../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-calendars/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-lists/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-popups/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-react-schedule/styles/material.css";

// import "../../../node_modules/@syncfusion/ej2/material.css";

import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
} from "@syncfusion/ej2-react-grids";
import { TreeGridComponent } from "@syncfusion/ej2-react-treegrid";
import { sortData, sampleData, resourceData } from "./data";
import { extend } from "@syncfusion/ej2-base";
import {
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
} from "@syncfusion/ej2-react-schedule";
import {
  TimelineViews,
  TimelineMonth,
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  ResourcesDirective,
  ResourceDirective,
  Inject,
} from "@syncfusion/ej2-react-schedule";
// import { GanttComponent } from '@syncfusion/ej2-react-gantt';
const SyncFusion = () => {
  const data: any[] = [
    {
      OrderID: 10248,
      CustomerID: "VINET",
      EmployeeID: 5,
      OrderDate: new Date(8364186e5),
      ShipName: "Vins et alcools Chevalier",
      ShipCity: "Reims",
      ShipAddress: "59 rue de l Abbaye",
      ShipRegion: "CJ",
      ShipPostalCode: "51100",
      ShipCountry: "France",
      Freight: 32.38,
      Verified: !0,
    },
    {
      OrderID: 10249,
      CustomerID: "TOMSP",
      EmployeeID: 6,
      OrderDate: new Date(836505e6),
      ShipName: "Toms Spezialitäten",
      ShipCity: "Münster",
      ShipAddress: "Luisenstr. 48",
      ShipRegion: "CJ",
      ShipPostalCode: "44087",
      ShipCountry: "Germany",
      Freight: 11.61,
      Verified: !1,
    },
    {
      OrderID: 10250,
      CustomerID: "HANAR",
      EmployeeID: 4,
      OrderDate: new Date(8367642e5),
      ShipName: "Hanari Carnes",
      ShipCity: "Rio de Janeiro",
      ShipAddress: "Rua do Paço, 67",
      ShipRegion: "RJ",
      ShipPostalCode: "05454-876",
      ShipCountry: "Brazil",
      Freight: 65.83,
      Verified: !0,
    },
  ];
  const taskName = () => {
    return (
      <div>
        <img src="taskname.png" width="20" height="20" className="e-image" />
        <b>Task Name</b>
      </div>
    );
  };
  const startDate = () => {
    return (
      <div>
        <img src="startdate.png" width="20" height="20" className="e-image" />
        <b>Start Date</b>
      </div>
    );
  };
  const duration = () => {
    return (
      <div>
        <img src="duration.png" width="20" height="20" className="e-image" />
        <b>Duration</b>
      </div>
    );
  };
  const progress = () => {
    return (
      <div>
        <img src="progress.png" width="20" height="20" className="e-image" />
        <b>Progress</b>
      </div>
    );
  };

  const data2: Object[] = extend([], resourceData, "null", true) as Object[];
  const roomData = [
    { RoomText: "ROOM 1", Id: 1, RoomColor: "#cb6bb2" },
    { RoomText: "ROOM 2", Id: 2, RoomColor: "#56ca85" },
  ];
  const ownerData = [
    { OwnerText: "Nancy", Id: 1, GroupId: 1, OwnerColor: "#ffaa00" },
    { OwnerText: "Steven", Id: 2, GroupId: 2, OwnerColor: "#f8a398" },
    { OwnerText: "Michael", Id: 3, GroupId: 1, OwnerColor: "#7499e1" },
  ];
  return (
    <div>
      SyncFusion
      <GridComponent dataSource={data}>
        <ColumnsDirective>
          <ColumnDirective field="OrderID" width="100" textAlign="Right" />
          <ColumnDirective field="CustomerID" width="100" />
          <ColumnDirective field="EmployeeID" width="100" textAlign="Right" />
          <ColumnDirective
            field="Freight"
            width="100"
            format="C2"
            textAlign="Right"
          />
          <ColumnDirective field="ShipCountry" width="100" />
        </ColumnsDirective>
      </GridComponent>
      ;
      <TreeGridComponent
        dataSource={sortData}
        treeColumnIndex={1}
        childMapping="subtasks"
      >
        <ColumnsDirective>
          <ColumnDirective field="Category" headerText="Category" width="150" />
          <ColumnDirective
            field="orderName"
            headerText="Order Name"
            width="170"
          />
          <ColumnDirective
            field="orderDate"
            headerText="Order Date"
            width="130"
            format="yMd"
            textAlign="Right"
            type="date"
          />
          <ColumnDirective
            field="price"
            headerText="Price"
            width="100"
            textAlign="Right"
            type="number"
            format="C0"
          />
        </ColumnsDirective>
      </TreeGridComponent>
      <TreeGridComponent
        dataSource={sampleData}
        childMapping="subtasks"
        height="315"
      >
        <ColumnsDirective>
          <ColumnDirective
            field="taskName"
            width="220"
            headerTemplate={taskName}
          />
          <ColumnDirective
            field="startDate"
            headerText="Start Date"
            format="yMd"
            type="date"
            textAlign="Right"
            headerTemplate={startDate}
          />
          <ColumnDirective
            field="duration"
            textAlign="Right"
            headerTemplate={duration}
          />
          <ColumnDirective
            field="progress"
            headerText="progress"
            textAlign="Right"
            headerTemplate={progress}
          />
        </ColumnsDirective>
      </TreeGridComponent>
      <ScheduleComponent>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
      <ScheduleComponent
        width="100%"
        height="550px"
        currentView="TimelineWeek"
        selectedDate={new Date(2018, 3, 1)}
        eventSettings={{ dataSource: data }}
        group={{ resources: ["Rooms", "Owners"] }}
      >
        <ViewsDirective>
          <ViewDirective option="TimelineDay" />
          <ViewDirective option="TimelineWeek" />
          <ViewDirective option="TimelineMonth" />
        </ViewsDirective>
        <ResourcesDirective>
          <ResourceDirective
            field="RoomId"
            title="Room"
            name="Rooms"
            dataSource={roomData}
            textField="RoomText"
            idField="Id"
            colorField="RoomColor"
          ></ResourceDirective>
          <ResourceDirective
            field="OwnerId"
            title="Owner"
            name="Owners"
            allowMultiple={true}
            dataSource={ownerData}
            textField="OwnerText"
            idField="Id"
            groupIDField="GroupId"
            colorField="OwnerColor"
          ></ResourceDirective>
        </ResourcesDirective>
        <Inject services={[TimelineViews, TimelineMonth]} />
      </ScheduleComponent>
    </div>
  );
};

export default SyncFusion;
