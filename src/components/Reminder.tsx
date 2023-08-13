import { Card, Flex, Avatar, Box, Text } from "@radix-ui/themes"
import style from './Reminder.module.css'

export default function Reminder() {
  return (
<Card className={style.container}>
  <Flex gap="3" align="center">
    <Avatar
      size="7"
      src="/images.png"
      fallback="T"
    />
    <Box>
      <Text as="div" size="2" weight="bold">
        Daily reminder
      </Text>
      <Text as="div" size="2" color="gray">
        {"Drink lots of water & take care of yourself :)"}
      </Text>
    </Box>
  </Flex>
</Card>
  )
}