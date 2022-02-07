import * as React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { Box, Center, Icon, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as="footer">
      <Center bg="purple" py={[16, 8]} px={4}>
        <Icon
          as={AiOutlineQuestionCircle}
          fontSize="3.2rem"
          color="white"
          mr={4}
        />
        <Text color="#fff" fontWeight={500}>
          Tire suas dúvidas sobre o Vida V na nossa central de ajuda
        </Text>
      </Center>
      <Center bg="background.secondary" py={20} px={4}>
        Telefone: 0800 870 1515 WhatsApp: (11) 98765-4321
      </Center>
      <Center bg="background.main" py={6} px={4}>
        Copyright © 2022 Vida V. Todos os direitos reservados. Dr. Caio Seixas
        Soares - CRM-SP 93840
      </Center>
    </Box>
  );
}
