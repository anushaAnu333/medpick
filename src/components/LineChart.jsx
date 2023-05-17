import { Bar } from "react-chartjs-2";
import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	Title,
	Tooltip,
} from "chart.js";
import { Text } from "@chakra-ui/react";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const option = {
	indexAxis: "x",
	elements: {
		bar: {
			borderWidth: 1,
		},
	},
	responsive: true,
	
	plugins: {
		legend: { position: "top" },
		title: {
			display: true,
		},
		datalabels: {
			formatter: value => value + " %", // Add the percentage after the value
			align: "end",
			anchor: "end",
			clip: true,
		  },
	},
};

const data = {
	labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
	datasets: [
		{
			label: "Vote",
			data: [5, 10, 15, 20, 25],
			backgroundColor: "yellow",
		},
	],
};

export default function LineChart() {
	return (
		<div style={{ width: 600, textAlign: "center" }} border={"1px solid red"}>
		
			<Bar options={option} data={data} height={250} />
		</div>
	);
}