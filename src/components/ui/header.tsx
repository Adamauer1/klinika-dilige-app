"use client"; // need for burger
import {
  AppShell,
  Burger,
  Divider,
  Drawer,
  Flex,
  Group,
  Image,
  rem,
  Stack,
  Text,
} from "@mantine/core";
import NextImage from "next/image";
import Link from "next/link";
import styles from "@/components/styles/Header.module.css";
import { useDisclosure } from "@mantine/hooks";
const Header = () => {
  const [burgerOpened, { toggle: burgerToggle }] = useDisclosure();
  // const [drawerOpened, { open: drawerOpen, close: drawerClose }] =
  //   useDisclosure(false);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerContainer}>
          <Link href={"/"}>
            <Image
              className=""
              src="/logo.png"
              alt="Logo"
              w={{ base: 120, md: 180, lg: 180, xl: 180 }}
              h={{ base: 60, md: 80, lg: 80, xl: 80 }}
              // width={180}
              // height={80}
              // priority
            />
          </Link>
          <nav>
            <Group
              visibleFrom="md"
              gap={rem(30)}
              styles={{ root: { marginRight: rem(60) } }}
            >
              <Text
                component={Link}
                href={"/"}
                size="lg"
                styles={{ root: { color: "black", fontWeight: "bold" } }}
              >
                Strona główna
              </Text>
              <Text
                component={Link}
                href={"/oferta"}
                size="lg"
                styles={{ root: { color: "black", fontWeight: "bold" } }}
              >
                Oferta
              </Text>
              <Text
                component={Link}
                href={"/o-nas"}
                size="lg"
                styles={{ root: { color: "black", fontWeight: "bold" } }}
              >
                O nas
              </Text>
              <Text
                component={Link}
                href={"/specjalisci"}
                size="lg"
                styles={{ root: { color: "black", fontWeight: "bold" } }}
              >
                Specjaliści
              </Text>
              <Text
                component={Link}
                href={"/kontakt"}
                size={"lg"}
                styles={{ root: { color: "black", fontWeight: "bold" } }}
              >
                Kontakt
              </Text>
            </Group>
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
            {/* <ul className={styles.ul}>
              <li className={styles.li}>
                <Text
                  component={Link}
                  href={"/"}
                  size="lg"
                  styles={{ root: { color: "black", fontWeight: "bold" } }}
                >
                  Strona główna
                </Text>
                <Link className={styles.link} href={"/"}>
                  Strona główna
                </Link>
              </li>
              <li className={styles.li}>
                <Text
                  component={Link}
                  href={"/oferta"}
                  size="lg"
                  styles={{ root: { color: "black", fontWeight: "bold" } }}
                >
                  Oferta
                </Text>
                <Link className={styles.link} href={"/oferta"}>
                  Oferta
                </Link>
              </li>
              <li className={styles.li}>
                <Text
                  component={Link}
                  href={"/o-nas"}
                  size="lg"
                  styles={{ root: { color: "black", fontWeight: "bold" } }}
                >
                  O nas
                </Text>
                <Link className={styles.link} href={"/o-nas"}>
                  O nas
                </Link>
              </li>
              <li className={styles.li}>
                <Text
                  component={Link}
                  href={"/specjalisci"}
                  size="lg"
                  styles={{ root: { color: "black", fontWeight: "bold" } }}
                >
                  Specjaliści
                </Text>
                <Link className={styles.link} href={"/specjalisci"}>
                  Specjaliści
                </Link>
              </li>
              <li className={styles.li}>
                <Link className={styles.link} href={"/aktualnosci"}>
                  Aktualności
                </Link>
              </li>
              <li className={styles.li}>
                <Text
                  component={Link}
                  href={"/Kontakt"}
                  size={"lg"}
                  styles={{ root: { color: "black", fontWeight: "bold" } }}
                >
                  Kontakt
                </Text>
                <Link className={styles.link} href={"/kontakt"}>
                  Kontakt
                </Link>
              </li>
            </ul> */}
          </nav>
        </div>
        <Divider />
      </div>
    </>
  );
};

export default Header;
