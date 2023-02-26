import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Stack,
  HStack,
  Input,
  Checkbox,
  FormLabel,
  RadioGroup,
  Radio,
  Collapse,
  Button,
} from "@chakra-ui/react";
const SideBar = () => {
  const locationArray = [
    "Kurta Pajama",
    "Men Kurtas",
    "Nehru Jacket",
    "Dhoti Kurta",
    "Sherwani",
    "Men Wedding",
    "Men Brooch",
    "Jodhpuri Sherwani",
    "Ties",
    "Men Apparel",
    "Accessories",
    "Tuxedo",
    "Men Footwear",
    "Dhotis",
    "Accessories",
    "Men Wedding",
  ];

  const CarBrandNames = [
    "Synthetic",
    "Cotton",
    "Silk",
    "Wool",
    "Polyester",
    "Linen",
    "Rayon",
    "Cashmere",
    "Leather",
    "Fur",
    "Suede",
    "Denim",
    "Velvet",
    "Lace",
  ];

  const CarModelNames = [
    "Accord",
    "Altima",
    "Camry",
    "Charger",
    "Cherokee",
    "Corolla",
    "Cruze",
    "Elantra",
    "Escape",
    "Explorer",
    "F-150",
    "Fusion",
    "Grand Cherokee",
    "Highlander",
    "Impala",
    "Jetta",
    "Malibu",
    "Maxima",
    "Optima",
    "Passat",
    "Pathfinder",
    "Rav4",
  ];

  const CarTrimNames = [
    "1.8T SE",
    "1.8T SEL",
    "1.8T SEL Premium",
    "1.8T S",
    "1.8T Sport",
    "1.8T Wolfsburg Edition",
    "1.8T Wolfsburg Edition PZEV",
    "2.0T Premium",
    "2.0T Premium Plus",
    "2.0T Premium Plus PZEV",
    "2.0T Premium PZEV",
    "2.0T S",
    "2.0T SE",
    "2.0T SEL",
    "2.0T SEL Premium",
    "2.0T Sport",
    "2.0T Wolfsburg Edition",
    "2.0T Wolfsburg Edition PZEV",
    "2.5 S",
    "2.5 SL",
    "2.5 SV",
    "25t Premium",
    "25t Prestige",
    "25t Premium Plus",
    "25t Premium Plus PZEV",
    "25t Premium PZEV",
  ];

  const CarYearNames = [
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
  ];

  const CarPrice = [
    "₹1000 - ₹19,00 (1297)",
    "₹20,00 - ₹29,00 (1899)",
    "₹30,00 - ₹39,00 (1099)",
    "₹40,00 - ₹49,00(299)",
    "₹50,00 - ₹59,00 (99)",
    "₹60,00 - ₹69,00 (49)",
    "₹70,00 - ₹79,00 (19)",
    "₹80,00 - ₹89,00 (9)",
    "₹90,00 - ₹99,00(9)",
    "₹100,00 - ₹109,00 (9)",
  ];

  const CarMileage = [
    "30,000 or less (282)",
    "40,000 or less (482)",
    "50,000 or less (682)",
    "60,000 or less (882)",
    "70,000 or less (1082)",
    "80,000 or less (1282)",
    "90,000 or less (1482)",
    "100,000 or less (1682)",
    "110,000 or less (1882)",
  ];

  const CarColor = [
    "Black",
    "Blue",
    "Brown",
    "Gold",
    "Gray",
    "Green",
    "Orange",
    "Pink",
    "Purple",
    "Red",
    "Silver",
    "White",
    "Yellow",
  ];

  const Features = ["Festive", "Formal", "Casual", "Party", "Wedding", "Work"];

  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <div>
      <Accordion allowToggle>
        <AccordionItem mb={4}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                CATEGORIES
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>

          <AccordionPanel pb={4}>
            <Collapse startingHeight={240} in={show}>
              {locationArray.map((location, id) => (
                <HStack spacing={4} key={id}>
                  <Checkbox />
                  <FormLabel>{location}</FormLabel>
                </HStack>
              ))}
            </Collapse>
            <Button size="sm" onClick={handleToggle} mt="1rem">
              Show {show ? "Less" : "More"}
            </Button>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem mb={4}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                TYPE
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <RadioGroup defaultValue="1">
              <Stack>
                <Radio value="1" isDisabled>
                  All (3947)
                </Radio>
                <Radio value="2">On The Lot (1620)</Radio>
                <Radio value="3">Ultimate Test Drive (2327)</Radio>
              </Stack>
            </RadioGroup>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem mb={4}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                MATERIAL
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Collapse startingHeight={240} in={show}>
              {CarBrandNames.map((brand, i) => (
                <HStack spacing={4} key={i}>
                  <Checkbox />
                  <FormLabel>
                    {brand} ({Math.floor(Math.random() * 100 + i)})
                  </FormLabel>
                </HStack>
              ))}
            </Collapse>
            <Button size="sm" onClick={handleToggle} mt="1rem">
              Show {show ? "Less" : "More"}
            </Button>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem mb={4}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                WORK
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {CarMileage.map((brand, i) => (
              <HStack spacing={4} key={i}>
                <Checkbox />
                <FormLabel>
                  {brand} ({Math.floor(Math.random() * 100 + i)})
                </FormLabel>
              </HStack>
            ))}
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem mb={4}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                DESIGNER
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Collapse startingHeight={240} in={show}>
              {CarModelNames.map((model, i) => (
                <HStack spacing={4} key={i}>
                  <Checkbox />
                  <FormLabel>
                    {model} ({Math.floor(Math.random() * 100 + i)})
                  </FormLabel>
                </HStack>
              ))}
            </Collapse>
            <Button size="sm" onClick={handleToggle} mt="1rem">
              Show {show ? "Less" : "More"}
            </Button>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem mb={4}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Year
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Collapse startingHeight={240} in={show}>
              {CarYearNames.map((model, i) => (
                <HStack spacing={4} key={i}>
                  <Checkbox />
                  <FormLabel>
                    {model} ({Math.floor(Math.random() * 100 + i)})
                  </FormLabel>
                </HStack>
              ))}
            </Collapse>
            <Button size="sm" onClick={handleToggle} mt="1rem">
              Show {show ? "Less" : "More"}
            </Button>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem mb={4}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Price Range
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {CarPrice.map((model, i) => (
              <HStack spacing={4} key={i}>
                <Checkbox />
                <FormLabel>{model}</FormLabel>
              </HStack>
            ))}
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem mb={4}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Color
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Collapse startingHeight={240} in={show}>
              {CarColor.map((model, i) => (
                <HStack spacing={4} key={i}>
                  <Checkbox />
                  <FormLabel>{model}</FormLabel>
                </HStack>
              ))}
            </Collapse>
            <Button size="sm" onClick={handleToggle} mt="1rem">
              Show {show ? "Less" : "More"}
            </Button>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem mb={4}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                OCCASION
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Collapse startingHeight={240} in={show}>
              {Features.map((model, i) => (
                <HStack spacing={4} key={i}>
                  <Checkbox />
                  <FormLabel>{model}</FormLabel>
                </HStack>
              ))}
            </Collapse>
            <Button size="sm" onClick={handleToggle} mt="1rem">
              Show {show ? "Less" : "More"}
            </Button>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default SideBar;