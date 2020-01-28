import React, { useState, useEffect, Fragment } from "react";
import Barcode from "react-hooks-barcode";
import BiohazardLOGO from "../asset/biohazard.png";
import QRCode from "qrcode.react";
import {
  PartialLabelContainer,
  LabelInner,
  Din,
  Span,
  Flag,
  CheckCharacter,
  CenterText,
  Vertical,
  Info,
  FloatContent,
  QRCodeBlock,
  CodeContainer,
  GridContainer,
  Logo,
  Biohazard
} from "./styledComponents/Label3x4Styled";

export const Label3x4 = () => {
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
      biohazard_Level: 1 // for 0 = "", for 1 = "logo + NOT EVALUATED FOR INFECTIOUS SUBSTANCES", FOR 2 = "logo + WARNING:AdvisePatientof Communicable Disease Risks"
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
  const slpitBarCode = product?.block1.isbt_Number.split(" ");
  useEffect(() => {
    setProduct(labelInfo);
  }, []);
  // Config BarCode
  const configDin = {
    width: 0.82,
    height: 16,
    fontSize: 0,
    margin: 0
  };
  const allBarCodes = `${product?.block1.isbt_Number.split(" ").join("")}, ${
    product?.block2.product_Code
  },${product?.block4.expiry_Date.barcode}`;
  return product ? (
    <Fragment>
      <PartialLabelContainer>
        <LabelInner>
          <CenterText>
            <Barcode value={slpitBarCode.join("")} {...configDin} />
            <Din>
              <Span>{slpitBarCode[0]}</Span>
              <Span>{slpitBarCode[1]}</Span>
              <Span>{slpitBarCode[2]}</Span>
              <Flag>{slpitBarCode[3]}</Flag>
              <CheckCharacter>{slpitBarCode[4]}</CheckCharacter>
            </Din>
          </CenterText>
          <Vertical>Partial Label</Vertical>
          <GridContainer grid={product.block3.biohazard_Level > 0}>
            <Info>
              {product.block2.product_Info.Product_Name}
              <br />
              Product: {product.block2.product_Code}
              <br />
              {product.block3.donation_Type !== "allogeneic"
                ? "Donor/Recipient:"
                : "Intended Recipient:"}
              {product.block3.biohazard_Level > 0 ? <br /> : " "}
              {product.block4.recipient.name},{" "}
              {product.block4.recipient.first_Name}
              <br />
              Recipient ID: {product.block4.recipient.id}
            </Info>
            {product.block3.biohazard_Level > 0 ? (
              <Biohazard>
                <Logo>
                  <img src={BiohazardLOGO} alt="Biohazard LOGO" />
                </Logo>
                BIOHAZARD
              </Biohazard>
            ) : (
              ""
            )}
          </GridContainer>
        </LabelInner>
      </PartialLabelContainer>
      <PartialLabelContainer>
        <LabelInner>
          <FloatContent>
            <QRCodeBlock>
              <QRCode value={allBarCodes} size={31}></QRCode>
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
          <Vertical>Partial Label</Vertical>
          <GridContainer grid={product.block3.biohazard_Level > 0}>
            <Info>
              {product.block2.product_Info.Product_Name}
              <br />
              {product.block3.donation_Type !== "allogeneic"
                ? "Donor/Recipient:"
                : "Intended Recipient:"}
              {product.block3.biohazard_Level > 0 ? <br /> : " "}
              {product.block4.recipient.name},{" "}
              {product.block4.recipient.first_Name}
              <br />
              Recipient ID: {product.block4.recipient.id}
            </Info>
            {product.block3.biohazard_Level > 0 ? (
              <Biohazard>
                <Logo>
                  <img src={BiohazardLOGO} alt="Biohazard LOGO" />
                </Logo>
                BIOHAZARD
              </Biohazard>
            ) : (
              ""
            )}
          </GridContainer>
        </LabelInner>
      </PartialLabelContainer>
    </Fragment>
  ) : (
    <Fragment>Loding...</Fragment>
  );
};
