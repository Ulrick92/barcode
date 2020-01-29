import React, { useState, useEffect } from "react";
import Barcode from "react-hooks-barcode";
import QRCode from "qrcode.react";
import axios from "axios";
import logoBiohazard from "../asset/biohazard.png";
import {
  InitialLabelContainer,
  LabelInner,
  ContentRight,
  Din,
  Span,
  Flag,
  CheckCharacter,
  DateLabel,
  OddLabel,
  EvenLabel,
  CenterText,
  FloatContent,
  ProducCodeContent,
  Volume,
  ProducCodetext,
  Title,
  BloodGroup,
  Info,
  QRCodeBlock,
  SecCode,
  Biohazard,
  Logo,
  Recipient
} from "./styledComponents/Label10x10Styled.js";
import "./style.css";

export const Label10x10 = () => {
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
  // Din BarCode
  // const [barCode, setBarCode] = useState(labelInfo.block1.isbt_Number);
  // Product Info
  const [product, setProduct] = useState();
  const slpitBarCode = product?.block1.isbt_Number.split(" ");
  useEffect(() => {
    setProduct(labelInfo);
    // axios
    //   .get(
    //     "http://localhost:3000/routes_generic/show_document/model_product_list/5dff7ab2441cca36cfebfa5e",
    //     {
    //       headers: {
    //         authorization: "Bearer crQaCrFNSM5AynmJ"
    //       }
    //     }
    //   )
    //   .then(response => {
    //     // handle success
    //     setProduct(response.data);
    //   })
    //   .catch(error => {
    //     // handle error
    //     console.log(error);
    //   });
  }, []);
  console.log("product =>", product);
  const CapitaliseStr = str => {
    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(" ");
  };
  const diplayProductCharacteristic = () => {
    if (product.block2.product_Info.Product_Characteristic) {
      const splitProductInfo = product.block2.product_Info.Product_Characteristic.split(
        "|"
      );
      const result = splitProductInfo.map((e, i) => {
        if (splitProductInfo.indexOf(e) !== 0) {
          return (
            <span key={i}>
              {CapitaliseStr(e)}
              <br />
            </span>
          );
        }
      });
      return result;
    }
  };
  // Collection Date
  const [collectionDate, setCollectionDate] = useState(new Date(Date.now()));
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
    } ${hour < 10 ? `0${hour}` : hour}:${
      minutes < 10 ? `0${minutes}` : minutes
    }`; // Full date to string
    const stringDateUTC = `${splitDate[1].replace(",", "")} ${splitDate[0]} ${
      splitDate[2]
    } ${hourUTC < 10 ? `0${hourUTC}` : hourUTC}:${
      minutesUTC < 10 ? `0${minutesUTC}` : minutesUTC
    }`; // Full UTC date to string
    return { localDate: stringDate, UTCDate: stringDateUTC };
  };
  // Display Bar Code Date Function
  const displayBarCodeDate = date => {
    const digitYear = new Date(date)
      .getFullYear()
      .toString()
      .substr(-2);
    const hour = new Date(date).getHours();
    const minutes = new Date(date).getMinutes();
    const date1 = new Date(date);
    const date2 = new Date(`dec 31, ${new Date(date).getFullYear() - 1}`);
    const res = Math.abs(date1 - date2) / 1000;
    const days = Math.floor(res / 86400);
    const result = `${digitYear.padStart(3, "0")}${String(days).padStart(
      3,
      "0"
    )}${hour < 10 ? `0${hour}` : hour}${
      minutes < 10 ? `0${minutes}` : minutes
    }`;
    return result;
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
    format: "CODE128",
    width: 1,
    height: 34.015,
    fontSize: 0,
    margin: 0
  };
  const configDate = {
    width: 1.4,
    height: 34.015,
    fontSize: 9,
    textAlign: "left",
    margin: 0
  };
  const configBlood = {
    width: 1.57,
    height: 34.015,
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
  const expirationDateBarcode = displayBarCodeDate(expirationlocalDate);
  const allBarCodes = `${product?.block1.isbt_Number.split(" ").join("")},${
    product?.block2.product_Code
  },${product?.block4.expiry_Date.barcode}`;
  return product ? (
    <InitialLabelContainer>
      <LabelInner>
        <OddLabel>
          <ContentRight>
            <Barcode value={slpitBarCode.join("")} {...configDin} />
            <Din>
              <Span>{slpitBarCode[0]}</Span>
              <Span>{slpitBarCode[1]}</Span>
              <Span>{slpitBarCode[2]}</Span>
              <Flag>{slpitBarCode[3]}</Flag>
              <CheckCharacter>{slpitBarCode[4]}</CheckCharacter>
            </Din>
          </ContentRight>
          <CenterText>
            Collection Center or Registry
            <br />
            <Span>{labelInfo.block1.collection_Center}</Span>
          </CenterText>
          <FloatContent>
            <Span className="text text-left">
              Collection
              <br />
              Date/Time
            </Span>
            <Span>
              <Barcode
                value={labelInfo.block1.collection_Date.barcode}
                {...configDate}
              />
            </Span>
          </FloatContent>
          <DateLabel>{labelInfo.block1.collection_Date.CET}</DateLabel>
          <DateLabel>({labelInfo.block1.collection_Date.UTC})</DateLabel>
          <CenterText>
            Do Not Irradiate
            <br />
            Do Not Use Leukoreduction Filter
          </CenterText>
        </OddLabel>
        <EvenLabel>
          <FloatContent>
            <Barcode value="4700" {...configBlood} />
            <BloodGroup>
              <CenterText className="group">
                {labelInfo.block3.ABO_Group}
              </CenterText>
              <CenterText>RhD {labelInfo.block3.RhD}</CenterText>
            </BloodGroup>
          </FloatContent>
          <Info>
            <div className="libele">
              {labelInfo.block3.biohazard_Level <= 0 ? (
                ""
              ) : labelInfo.block3.biohazard_Level === 1 ? (
                <Biohazard>
                  <Logo>
                    <img src={logoBiohazard} alt="" />
                  </Logo>
                  <br />
                  Not Evaluated For Infectious Substances
                </Biohazard>
              ) : (
                <Biohazard>
                  <Logo>
                    <img src={logoBiohazard} alt="" />
                  </Logo>
                  <br />
                  Warning: advisepatientof Communicable Disease Risks
                </Biohazard>
              )}
              {/* If  Allogeneic Or Not*/}
              {labelInfo.block3.donation_Type === "allogeneic"
                ? "For Use By Intended Recipient Only"
                : "For Autologous Use Only"}
            </div>
            {/* If  Allogeneic Or Not*/}
            {labelInfo.block3.donation_Type !== "allogeneic" ? (
              ""
            ) : labelInfo.block3.donation_Type === "allogeneic" &&
              labelInfo.block3.anonymous === true ? (
              <div>
                Related Donor:
                <br />
                Donor ID: {labelInfo.block3.donor.id}
              </div>
            ) : (
              <div>
                Related Donor:
                <br />
                {labelInfo.block3.donor.name},{" "}
                {labelInfo.block3.donor.first_Name}
                <br />
                Donor ID: {labelInfo.block3.donor.id}
                <br />
                Date of Birth: {labelInfo.block3.donor.date_Of_Birth}
              </div>
            )}
          </Info>
        </EvenLabel>
        <OddLabel>
          <ContentRight>
            <FloatContent>
              <Span className="text text-left"></Span>
              <Barcode value={product.block2.product_Code} {...configDate} />
            </FloatContent>
          </ContentRight>
          <ProducCodeContent>
            <Title>
              {product.block2.product_Info.Product_Name}
              {product.block2.for_Transplant && <Span>, for transplant</Span>}
            </Title>
            <ProducCodetext>
              {diplayProductCharacteristic()}See Accompanying Documentation
            </ProducCodetext>
            <Volume>
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
            </Volume>
            <ProducCodetext>
              {!product.block2.cryopreserved
                ? `Store at ${product.block2.temperature.min}C to ${product.block2.temperature.max}C`
                : "Store at -150C or Colder"}
            </ProducCodetext>
          </ProducCodeContent>
        </OddLabel>
        <EvenLabel>
          <FloatContent>
            <Span>
              <Barcode
                value={product.block4.expiry_Date.barcode}
                {...configDate}
              />
            </Span>
            <Span className="text text-right">Expiry Date and Time</Span>
          </FloatContent>
          <DateLabel>{product.block4.expiry_Date.CET}</DateLabel>
          <DateLabel>({product.block4.expiry_Date.UTC})</DateLabel>
          <Info>
            <Recipient>
              {product.block3.donation_Type !== "allogeneic"
                ? "Donor/Recipient:"
                : "Intended Recipient:"}
              <br />
              {product.block4.recipient.name},{" "}
              {product.block4.recipient.first_Name} <br />
              Recipient ID: {product.block4.recipient.id} <br />
              Date of Birth: {product.block4.recipient.date_Of_Birth}
            </Recipient>
            <div>{product.block4.processing_Facility}</div>
          </Info>
        </EvenLabel>
        <QRCodeBlock>
          <QRCode value={allBarCodes} size={40} renderAs="canvas" />
        </QRCodeBlock>
        <SecCode>SEC: {product.SEC}</SecCode>
      </LabelInner>
    </InitialLabelContainer>
  ) : (
    <InitialLabelContainer>Loding...</InitialLabelContainer>
  );
};
