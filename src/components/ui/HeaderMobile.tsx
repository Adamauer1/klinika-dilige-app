"use client";
import Link from "next/link";
import { Burger, rem, Drawer, Stack, Divider, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function HeaderMobile() {
  const [burgerOpened, { toggle: burgerToggle }] = useDisclosure();
  return (
    <>
      <Burger
        opened={burgerOpened}
        onClick={burgerToggle}
        hiddenFrom="md"
        mr={rem(10)}
      />
      <Drawer
        opened={burgerOpened}
        onClose={burgerToggle}
        position="right"
        size={"sm"}
      >
        {
          <Stack>
            <Divider />
            <Text
              component={Link}
              href={"/"}
              size="lg"
              styles={{
                root: {
                  color: "black",
                  fontWeight: "bold",
                  marginLeft: rem(20),
                },
              }}
              onClick={burgerToggle}
            >
              Strona główna
            </Text>
            <Divider />
            <Text
              component={Link}
              href={"/oferta"}
              size="lg"
              styles={{
                root: {
                  color: "black",
                  fontWeight: "bold",
                  marginLeft: rem(20),
                },
              }}
              onClick={burgerToggle}
            >
              Oferta
            </Text>
            <Divider />
            <Text
              component={Link}
              href={"/o-nas"}
              size="lg"
              styles={{
                root: {
                  color: "black",
                  fontWeight: "bold",
                  marginLeft: rem(20),
                },
              }}
              onClick={burgerToggle}
            >
              O nas
            </Text>
            <Divider />
            <Text
              component={Link}
              href={"/specjalisci"}
              size="lg"
              styles={{
                root: {
                  color: "black",
                  fontWeight: "bold",
                  marginLeft: rem(20),
                },
              }}
              onClick={burgerToggle}
            >
              Specjaliści
            </Text>
            <Divider />
            <Text
              component={Link}
              href={"/kontakt"}
              size={"lg"}
              styles={{
                root: {
                  color: "black",
                  fontWeight: "bold",
                  marginLeft: rem(20),
                },
              }}
              onClick={burgerToggle}
            >
              Kontakt
            </Text>
            <Divider />
          </Stack>
        }
      </Drawer>
    </>
  );
}
