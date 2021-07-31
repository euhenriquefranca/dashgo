import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Henrique França</Text>
        <Text color="gray.300">euhenriquefranca@gmail.com</Text>
      </Box>

      <Avatar
        size="md"
        name="Henrique França"
        src="https://github.com/euhenriquefranca.png"
      />
    </Flex>
  );
}
