import { Divider, Group, Image, rem, Text } from "@mantine/core";
import NextImage from "next/image";
import Link from "next/link";
import styles from "@/components/styles/header.module.css";
import HeaderMobile from "./HeaderMobile";
const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerContainer}>
          <Link href={"/"}>
            <Image
              className=""
              src="/images/logo.png"
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
            <HeaderMobile />
          </nav>
        </div>
        <Divider />
      </div>
    </>
  );
};

export default Header;
