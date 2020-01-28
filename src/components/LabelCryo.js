import React, { useState, useEffect, Fragment } from "react";
import Barcode from "react-hooks-barcode";
import BiohazardLOGO from "../asset/biohazard.png";
import QRCode from "qrcode.react";
import {
  FinalLabelContainrer,
  LabelInner,
  Din,
  Span,
  Flag,
  CheckCharacter,
  DateLabel,
  Block,
  FloatContent,
  Title,
  Info,
  QRCodeBlock,
  BlockText,
  Libele,
  Logo,
  Biohazard,
  Bottom,
  CodeContainer,
  LongText
} from "./styledComponents/LabelCryoStyled.js";
import "./style.css";

export const LabelCryo = () => {
  // Label
  const labelInfo = {
    block1: {
      isbt_Number: "A9996 17 123456 00 S",
      collection_Center: "City,State, ZIP Code",
      collection_Date: {
        CET: "31 MAR 2017 12:15",
        UTC: "31 MAR 2017 10:15 UTC",
        barcode: "0170901215"
      }
    },
    block2: {
      product_Code: "S1697400",
      product_Info: {
        Coding_System: "A - ISBT 128",
        Product_Number: "S1697",
        Product_Name: "HPC, MARROW",
        Product_Characteristic:
          "Heparin/XX/rt|3rd Party Comp:Yes|Other Additives:Yes|Mononuclear cell enriched",
        Product_Code: "A00S1697",
        EUTC_Name: "PROGENITOR CELLS, HEMATOPOIETIC, BONE MARROW"
      },
      bag_Number: "00",
      total_Volume: "250",
      containing_Approx: "6",
      volume_Additif: "Citrate",
      cryopreserved: false,
      temperature: {
        consigne: "6",
        min: "1",
        max: "10"
      },
      for_Transplant: true // for transplant or "" (display after the product name)
    },
    block3: {
      ABO_Group: "O",
      RhD: "positive",
      donation_Type: "allogeneic", // autologous or allogeneic (if autologous display "for autologous use only"), (if allogeneic DISPLAY "for use by intended recipient only")
      directed: true,
      anonymous: false, // if "true" display the donor.id only
      donor: {
        name: "SMITH",
        first_Name: "John",
        id: "1234567",
        date_Of_Birth: "17 NOV 1983"
      },
      biohazard_Level: 0 // for 0 = "", for 1 = "logo + NOT EVALUATED FOR INFECTIOUS SUBSTANCES", FOR 2 = "logo + WARNING:AdvisePatientof Communicable Disease Risks"
    },
    block4: {
      expiry_Date: {
        CET: "1 APR 2017 12:15",
        UTC: "1 APR 2017 10:15 UTC",
        barcode: "0170911215"
      },
      recipient: {
        name: "SMITH",
        first_Name: "John",
        id: "1234567",
        date_Of_Birth: "17 NOV 1983"
      },
      processing_Facility: "Elsewhere, worldwide"
    },
    SEC: "PL001499Z549917123456 A00T041600320181231"
  };
  // Din Product
  const [product, setProduct] = useState();
  const slpitBarCode = product?.block1?.isbt_Number.split(" ");
  // // Din BarCode
  // const [barCode, setBarCode] = useState("A9999 17 123458 00 5");
  // Collection Date
  const [collectionDate, setCollectionDate] = useState(new Date(Date.now()));
  useEffect(() => {
    setProduct(labelInfo);
  }, []);
  const CapitaliseStr = str => {
    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(" ");
  };
  const diplayProductCharacteristic = () => {
    let result;
    if (product.block2.product_Info.Product_Characteristic) {
      const splitProductInfo = product.block2.product_Info.Product_Characteristic.split(
        "|"
      );
      result = splitProductInfo.map((e, i) => {
        if (splitProductInfo.indexOf(e) !== 0) {
          return (
            <span key={i}>
              {CapitaliseStr(e)}
              <br />
            </span>
          );
        }
      });
    }
    return result;
  };
  // Delete Hour Of Date
  const deleteHourDate = d => {
    const splitDate = d.split(" ");
    const result = splitDate.map(e => {
      if (
        splitDate.indexOf(e) !==
        splitDate.indexOf(splitDate[splitDate.length - 1])
      ) {
        return e;
      }
    });
    return result.join(" ");
  };
  // Display Date Function
  const displayDate = date => {
    // Format date to string
    const splitDate = new Date(date)
      .toLocaleDateString("en-EN", {
        day: "numeric",
        month: "short",
        year: "numeric"
      })
      .split(" ");
    const hour = new Date(date).getHours(); // Get the hour
    const minutes = new Date(date).getMinutes(); // Get the minutes
    const hourUTC = new Date(date).getUTCHours(); // Get the hourUTC
    const minutesUTC = new Date(date).getUTCMinutes(); // Get the minutesUTC
    const stringDate = `${splitDate[1].replace(",", "")} ${splitDate[0]} ${
      splitDate[2]
    }`; // Full date to string
    const stringDateUTC = `${splitDate[1].replace(",", "")} ${splitDate[0]} ${
      splitDate[2]
    } ${hourUTC < 10 ? `0${hourUTC}` : hourUTC}:${
      minutesUTC < 10 ? `0${minutesUTC}` : minutesUTC
    }`; // Full UTC date to string
    return { localDate: stringDate, UTCDate: stringDateUTC };
  };
  // Display Expiration Date Function
  const expirationDate = (date, day, hour) => {
    const Thedate = new Date(date);
    const dateTime = Thedate.getTime();
    // 60 secondes * 60 minutes * 24 hours
    // We multiply by 1000 because the time is expressed in milliseconds.
    const endTime =
      dateTime + 60 * 60 * `${day !== 0 && day > 0 ? day * 24 : hour}` * 1000;
    const endDate = new Date(endTime);
    const value = displayDate(endDate);
    return {
      expirationlocalDate: value.localDate,
      expirationUTCDate: value.UTCDate
    };
  };
  // Config BarCode
  const configDin = {
    width: 1,
    height: 24,
    fontSize: 0,
    margin: 0
  };
  const configDate = {
    width: 1.38,
    height: 26,
    fontSize: 9,
    textAlign: "left",
    margin: 0
  };
  const { localDate, UTCDate } = displayDate(collectionDate);
  const { expirationlocalDate, expirationUTCDate } = expirationDate(
    collectionDate,
    14,
    72
  );
  // QRCode Content
  const allBarCodes = `${product?.block1.isbt_Number.split(" ").join("")},${
    product?.block2.product_Code
  },${product?.block4.expiry_Date.barcode}`;
  return product ? (
    <Fragment>
      <FinalLabelContainrer>
        <LabelInner>
          <Block>
            <Barcode value={slpitBarCode.join("")} {...configDin} />
            <Din>
              <Span>{slpitBarCode[0]}</Span>
              <Span>{slpitBarCode[1]}</Span>
              <Span>{slpitBarCode[2]}</Span>
              <Flag>{slpitBarCode[3]}</Flag>
              <CheckCharacter>{slpitBarCode[4]}</CheckCharacter>
            </Din>
            <Barcode value={product.block2.product_Code} {...configDate} />
            <Title>
              {product.block2.product_Info.Product_Name}
              {product.block2.for_Transplant && <Span>, for transplant</Span>}
            </Title>
            <BlockText>
              <div>
                <Span>Collection Date:</Span>
                <DateLabel>
                  {deleteHourDate(product.block1.collection_Date.CET)}
                </DateLabel>
              </div>
              <div>
                <Span>Expiry Date:</Span>
                <DateLabel>
                  {deleteHourDate(product.block4.expiry_Date.CET)}
                </DateLabel>
              </div>
            </BlockText>
            <Libele>Partial Label</Libele>
          </Block>
          <Block>
            <FloatContent flex={product.block3.biohazard_Level > 0}>
              {product.block3.biohazard_Level > 0 ? (
                <Logo>
                  <img src={BiohazardLOGO} alt="Biohazard LOGO" />
                </Logo>
              ) : (
                ""
              )}
              <Biohazard widthBox={product.block3.biohazard_Level > 0}>
                {product.block3.biohazard_Level > 0 ? "BIOHAZARD" : ""}
                {product.block3.biohazard_Level > 0 ? <br /> : ""}
                <Span>
                  {product.block3.donation_Type !== "allogeneic"
                    ? "FOR AUTOLOGOUS USE ONLY"
                    : "FOR USE BY INTENDED RECIPIENT ONLY"}
                </Span>
              </Biohazard>
            </FloatContent>
            <Info>
              <div>
                {product.block3.donation_Type !== "allogeneic"
                  ? "Donor/Recipient:"
                  : "Intended Recipient:"}
                <br />
                {product.block4.recipient.name},{" "}
                {product.block4.recipient.first_Name}
                <br />
                Recipient ID: {product.block4.recipient.id} <br />
                Date of Birth: {product.block4.recipient.date_Of_Birth}
              </div>
            </Info>
            <Bottom>
              Processing Facility <br />
              {product.block4.processing_Facility}
            </Bottom>
          </Block>
        </LabelInner>
      </FinalLabelContainrer>
      <FinalLabelContainrer>
        <LabelInner>
          <Block>
            <FloatContent flex>
              <QRCodeBlock>
                <QRCode value={allBarCodes} size={31} />
              </QRCodeBlock>
              <CodeContainer>
                <div>
                  <Din>
                    <Span>{slpitBarCode[0]}</Span>
                    <Span>{slpitBarCode[1]}</Span>
                    <Span>{slpitBarCode[2]}</Span>
                    <Flag>{slpitBarCode[3]}</Flag>
                    <CheckCharacter>{slpitBarCode[4]}</CheckCharacter>
                  </Din>
                  <Info>Product: {product.block2.product_Code}</Info>
                </div>
              </CodeContainer>
            </FloatContent>
            <Title>
              {product.block2.product_Info.Product_Name}
              {product.block2.for_Transplant && <Span>, for transplant</Span>}
            </Title>
            <LongText>
              {diplayProductCharacteristic()}
              Total Volume{" "}
              {!product.block2.total_Volume
                ? "__"
                : product.block2.total_Volume}{" "}
              mL containing
              <br />
              approx{" "}
              {!product.block2.containing_Approx
                ? "__"
                : product.block2.containing_Approx}{" "}
              mL {product.block2.volume_Additif}
              <br />
              {!product.block2.cryopreserved
                ? `Store at ${product.block2.temperature.min}C to ${product.block2.temperature.max}C`
                : "Store at -150C or Colder"}{" "}
              <br />
              Collection Center or Registry <br />
              {product.block4.processing_Facility}
            </LongText>
            <BlockText>
              <div>
                <Span>Collection Date:</Span>
                <DateLabel>
                  {deleteHourDate(product.block1.collection_Date.CET)}
                </DateLabel>
              </div>
              <div>
                <Span>Expiry Date:</Span>
                <DateLabel>
                  {deleteHourDate(product.block4.expiry_Date.CET)}
                </DateLabel>
              </div>
            </BlockText>
            <Libele>Partial Label</Libele>
          </Block>
          <Block>
            <FloatContent flex={product.block3.biohazard_Level > 0}>
              {product.block3.biohazard_Level > 0 ? (
                <Logo>
                  <img src={BiohazardLOGO} alt="Biohazard LOGO" />
                </Logo>
              ) : (
                ""
              )}
              <Biohazard widthBox={product.block3.biohazard_Level > 0}>
                {product.block3.biohazard_Level > 0 ? "BIOHAZARD" : ""}
                {product.block3.biohazard_Level > 0 ? <br /> : ""}
                <Span>
                  {product.block3.donation_Type !== "allogeneic"
                    ? "FOR AUTOLOGOUS USE ONLY"
                    : "FOR USE BY INTENDED RECIPIENT ONLY"}
                </Span>
              </Biohazard>
            </FloatContent>
            <Info>
              <div>
                {product.block3.donation_Type !== "allogeneic"
                  ? "Donor/Recipient:"
                  : "Intended Recipient:"}
                <br />
                {product.block4.recipient.name},{" "}
                {product.block4.recipient.first_Name}
                <br />
                Recipient ID: {product.block4.recipient.id} <br />
                Date of Birth: {product.block4.recipient.date_Of_Birth}
              </div>
            </Info>
            <Bottom>
              Processing Facility <br />
              {product.block4.processing_Facility}
            </Bottom>
          </Block>
        </LabelInner>
      </FinalLabelContainrer>
    </Fragment>
  ) : (
    <Fragment>Loading...</Fragment>
  );
};
