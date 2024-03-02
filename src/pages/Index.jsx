import { Box, Flex, Text, Stat, StatLabel, StatNumber, StatGroup, SimpleGrid, Progress, Badge, useColorModeValue } from "@chakra-ui/react";
import { FaShoppingCart, FaDollarSign, FaChartLine, FaUsers } from "react-icons/fa";

const Index = () => {
  const cardBg = useColorModeValue("white", "gray.700");

  return (
    <Flex direction="column" p={5}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={5}>
        <StatCard icon={FaShoppingCart} title="Total Sales" stat="8,938" bg={cardBg} />
        <StatCard icon={FaDollarSign} title="Total Revenue" stat="$89,438" bg={cardBg} />
        <StatCard icon={FaChartLine} title="Conversion Rate" stat="23.48%" bg={cardBg} />
        <StatCard icon={FaUsers} title="Active Users" stat="1,223" bg={cardBg} />
      </SimpleGrid>

      <Box mt={10}>
        <Text fontSize="2xl" mb={5}>
          Sales Progress
        </Text>
        <Progress colorScheme="green" size="lg" value={47} />
      </Box>

      <Box mt={10}>
        <Text fontSize="2xl" mb={5}>
          Current Goals
        </Text>
        <Badge colorScheme="green" p={2} m={1}>
          Increase Conversion Rate by 5%
        </Badge>
        <Badge colorScheme="blue" p={2} m={1}>
          Grow Sales by 10%
        </Badge>
        <Badge colorScheme="red" p={2} m={1}>
          Reduce Churn Rate
        </Badge>
      </Box>
    </Flex>
  );
};

const StatCard = ({ icon: Icon, title, stat, bg }) => {
  return (
    <Stat p={5} bg={bg} borderRadius="md" boxShadow="sm">
      <Flex justifyContent="space-between">
        <Box pl={3} pt={1}>
          <Icon size="3em" />
        </Box>
        <Box>
          <StatLabel fontWeight="medium">{title}</StatLabel>
          <StatNumber fontSize="2xl">{stat}</StatNumber>
        </Box>
      </Flex>
    </Stat>
  );
};

export default Index;
