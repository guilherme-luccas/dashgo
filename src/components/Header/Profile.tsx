import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Text } from "@chakra-ui/layout";

interface ProfileProps {
  showProfileData?: boolean;
}

export default function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Guilherme</Text>
          <Text color="gray.300" fontSize="small">
            guilherme.luccas@outlook.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Guilherme Luccas" src="" />
    </Flex>
  );
}
