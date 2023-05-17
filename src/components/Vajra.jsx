import { Button, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Box } from "@chakra-ui/react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/react";
import expenses from "../images/expenses.png";
import mangement from "../images/mangement.png";
import assets from "../images/assets.png";
import frame from "../images/frame.png";
import Vector from "../images/Vector.png";
import Inservice from "../images/Inservice.png";
import graph from "../images/graph.png";
import { Heading } from "@chakra-ui/react";
import LineChart from "./LineChart";

const Vajra = () => {
	return (
		<Box
			
			height={"2683px"}
			width={"100%"}
			padding={"3%"}
		>
			<Flex
			boxShadow={" 4px 4px 8px -2px rgba(0, 79, 149, 0.25)"}
				height={"56px"}
				width={"100%"}
				display="flex"
				alignItems="center"
				justifyContent="space-between"
				padding={"2%"}
        gap={'2px'}
			>
				<InputGroup>
					<InputLeftElement pointerEvents="none">
						<SearchIcon color="gray.300" />
					</InputLeftElement>
					<Input
						type="tel"
						
						
						width={"837px"}
						height={"36px"}
					/>
				</InputGroup>
				<Button bg={"#004F95"} color={"white"} mr={'2%'}>Add New</Button>
				<Button bg={"#004F95"} mr={'2%'} color={"white"}>Sign In</Button>
				<Button bg={'#F78117'} color={"white"}>Sign Up</Button>
			</Flex>
			<Box
			boxShadow={" 4px 4px 8px -2px rgba(0, 79, 149, 0.25)"}
				width={"100%"}
				height={"680px"}
				marginTop={"2%"}
        p={'2%'}

			>
				<Heading color={"#004F95"} >Total Incidents Recorded</Heading>
				<Box display="flex"  mt={"2%"} justifyContent={"space-between"} width={"100%"} >
					<Box
						display="flex"
						alignItems="center"
						justifyContent="space-between"
						width={"300px"}
						color={"blue"}
					>
						<Button border={"1px solid #7A7A7A"} bgColor={"white"}>Days</Button>
						<Button
							border={"1px solid #7A7A7A"}bgColor={"white"}
							backgroundColor="blue"
							color={"white"}
						>
							Week
						</Button>
						<Button bgColor={"white"} border={"1px solid #7A7A7A"}>Month</Button>
						<Button bgColor={"white"} border={"1px solid #7A7A7A"}>Custom</Button>
					</Box>
					<Box display="flex">
						<Button border={"1px solid #7A7A7A"} bg={'#004F95'} color={"white"}>Recorded</Button>
						<Button bg={'white'} color={'blue'} border={"1px solid #7A7A7A"}>Cleared</Button>
					</Box>
				</Box>
				<Box>
					{" "}
					<LineChart />
				</Box>
        <Flex ml={'20%'} gap="2%">
          <Text>   X-Axis:weeks</Text>
          <Text>Y-Axis:incidents</Text>
        </Flex>
			</Box>
			<Box
		
				display={"flex"}
				height={"400px"}
				padding={"2px"}
				marginTop={"2%"}
        width={"100%"}
     
			>
				<Image
					src={expenses}
					width={"330px"}
					height={"350px"}
					
				/>
				<Image src={Inservice} width={"330px"}
					height={"350px"}/>
				<Image src={assets}width={"330px"}
					height={"350px"} />
				<Image src={mangement} width={"330px"}
					height={"350px"}/>
			</Box>
			<Box  display={"flex"} gap={"3%"}>
				<Box boxShadow={" 4px 4px 8px -2px rgba(0, 79, 149, 0.25)"} width={"30%"} height={"550px"} padding={"2%"}>
					<Heading color={"blue"} textAlign={"center"}>
						Departments
					</Heading>
          <Flex gap={'2px'} mt={'2%'}>
            <Box width={'68px'} h={'20px'} bgColor={"#004F95"}></Box>
            <Box width={'68px'} h={'20px'} bgColor={"#3DA5D9"}></Box>
            <Box width={'68px'} h={'20px'} bgColor={"#73BFB8"}></Box>
            <Box width={'68px'} h={'20px'} bgColor={"#FEC601"}></Box>
            <Box width={'68px'} h={'20px'} bgColor={"#EA7317"}></Box>


          </Flex>
        
					
					<Text mt={'7%'}  >Laboratory</Text>
					<Box display={"flex"}>
            <Box bg={'#ADCCE9'} w={'325px'} h={'20px'}>
            <Box bg={"#3DA5D9"} width={"267px"} height={"20px"}></Box>
            </Box>
						
						<Text ml="2%">91</Text>
					</Box>
          <Text mt={'5%'}>Radiology</Text>
					<Box display={"flex"}>
            <Box bg={'#ADCCE9'} w={'325px'} h={'20px'}>
            <Box bg={"#3DA5D9"} width={"198px"} height={"20px"}></Box>
            </Box>
						
						<Text ml="2%">91</Text>
					</Box>
          
          <Text mt={'5%'}>Laboratory</Text>
					<Box display={"flex"}>
            <Box bg={'#ADCCE9'} w={'325px'} h={'20px'}>
            <Box bg={"#3DA5D9"} width={"198px"} height={"20px"}></Box>
            </Box>
						
						<Text ml="2%">53</Text>
					</Box>
          <Text mt={'5%'}>ICU</Text>
					<Box display={"flex"}>
            <Box bg={'#ADCCE9'} w={'325px'} h={'20px'}>
            <Box bg={"#73BFB8"} width={"301px"} height={"20px"}></Box>
            </Box>
						
						<Text ml="2%">98</Text>
					</Box>
          <Text mt={'5%'}>Operation Theatre</Text>
					<Box display={"flex"}>
            <Box bg={'#ADCCE9'} w={'325px'} h={'20px'}>
            <Box bg={"#FEC601"} width={"256px"} height={"20px"}></Box>
            </Box>
						
						<Text ml="2%">75</Text>
					</Box>
          <Text mt={'5%'}>OPD</Text>
					<Box display={"flex"}>
            <Box bg={'#ADCCE9'} w={'325px'} h={'20px'}>
            <Box bg={"#EA7317"} width={"256px"} height={"20px"}></Box>
            </Box>
						
						<Text ml="2%">36</Text>
					</Box>
          
          
					
				</Box>
				<Box
				
					width={"70%"}
					height={"550px"}
					color={"blue"}
				>
					
          <Image src={graph} h={"100%"}/>
				</Box>
			</Box>
			<Box boxShadow={" 4px 4px 8px -2px rgba(0, 79, 149, 0.25)"} width={"100%"} height={"380px"} display={"flex"} color={"#004F95"}  gap={'3%'} mt={'4%'}>
				<Box  color={"#004F95"} padding={"2%"}boxShadow={'0px 4px 8px rgba(0, 79, 149, 0.25);'}>
					<Heading textAlign={"center"} mt={'2%'}>Calibrated</Heading>
					<Text mt={'5%'}>Calibrated</Text>
					<Box display={"flex"}>
						<Box bg={"#3DA5D9"} width={"556px"} height={"28px"}></Box>
						<Text>36</Text>
					</Box>
					<Text mt={'5%'}>Not Calibrated</Text>
					<Box display={"flex"}>
						<Box bg={"#EA7317"} width={"315px"} height={"28px"}></Box>
						<Text>16</Text>
					</Box>
					<Text mt={'5%'}>Not Required</Text>
					<Box display={"flex"}>
						<Box bg={"#FEC601"} width={"158px"} height={"28px"}></Box>
						<Text>16</Text>
					</Box>
				</Box>
				<Flex  width={"310px"} boxShadow={'0px 4px 8px rgba(0, 79, 149, 0.25);'}height={"380px"} alignItems={"center"} flexDirection={"column"} gap={'3%'}>
          <Heading textAlign={"center"} mt={'10%'}>Manuals</Heading>
          <Image src={frame}/>
          <Box w={"223px"} h={"49px"} bg={'#004F95'} mb={'2%'} mt={'2%'} color={"white"} textAlign={"center"} >User Manual</Box>
          <Box w={"223px"} h={"49px"} bg={'#004F95'} color={"white"} textAlign={"center"}>Service Manual</Box>
        </Flex>
				<Flex boxShadow={'0px 4px 8px rgba(0, 79, 149, 0.25);'} flexDirection={"column"} alignItems={"center"}  width={"310px"} height={"100%"} >
          <Heading   mt={'10%'} textAlign={"center"}>Warranty</Heading >
        
          <Image src={Vector} mt={'15%'} h={'150px'} w={"150px"}/>
        </Flex>
			</Box>
      <Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </Box>
		</Box>
	);
};

export default Vajra;
