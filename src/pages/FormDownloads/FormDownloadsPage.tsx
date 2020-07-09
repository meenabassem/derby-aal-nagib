import React, {useEffect, useState} from "react";
import "App.scss";
import {Image, ListGroup} from "react-bootstrap";
import PdfIcon from "assets/img/pdficon.png";

interface FormData {
  language?: string;
  label?: string;
  downloadUrl: string;
}
interface FormGroup {
  title: string;
  formEntries: FormData[];
}

const _formData: FormGroup[] = [
  {
    title: "Entry Forms",
    formEntries: [
      {
        label: "Download Entry Form 2020",
        language: "English",
        downloadUrl:
          "https://www.victoriafallswcpr.com/downloads/Entry%20Form%202021%20(English).pdf"
      },
      {
        label: "Download Entry Form 2020",
        language: "Arabic",
        downloadUrl:
          "https://www.victoriafallswcpr.com/downloads/Entry%20Form%202021%20(English).pdf"
      }
    ]
  },
  {
    title: "Terms And Conditions",
    formEntries: [
      {
        label: "Download Terms & conditions 2020",
        language: "English",
        downloadUrl:
          "https://www.victoriafallswcpr.com/downloads/Entry%20Form%202021%20(English).pdf"
      },
      {
        label: "Download Terms & conditions 2021",
        language: "English",
        downloadUrl:
          "https://www.victoriafallswcpr.com/downloads/Entry%20Form%202021%20(English).pdf"
      },
      {
        label: "Download Terms & conditions 2020",
        language: "Arabic",
        downloadUrl:
          "https://www.victoriafallswcpr.com/downloads/Entry%20Form%202021%20(English).pdf"
      },
      {
        label: "Download Terms & conditions 2021",
        language: "Arabic",
        downloadUrl:
          "https://www.victoriafallswcpr.com/downloads/Entry%20Form%202021%20(English).pdf"
      }
    ]
  },
  {
    title: "Prize Money",
    formEntries: [
      {
        label: "Download Prize Money 2020",
        language: "English",
        downloadUrl:
          "https://www.victoriafallswcpr.com/downloads/Entry%20Form%202021%20(English).pdf"
      },
      {
        label: "Download Prize Money 2020",
        language: "Arabic",
        downloadUrl:
          "https://www.victoriafallswcpr.com/downloads/Entry%20Form%202021%20(English).pdf"
      },
      {
        label: "Download Prize Money 2021",
        language: "English",
        downloadUrl:
          "https://www.victoriafallswcpr.com/downloads/Entry%20Form%202021%20(English).pdf"
      },
      {
        label: "Download Prize Money 2021",
        language: "Arabic",
        downloadUrl:
          "https://www.victoriafallswcpr.com/downloads/Entry%20Form%202021%20(English).pdf"
      }
    ]
  }
];

const FormDownloadsPage = () => {
  const [formData, setFormData] = useState<FormGroup[]>([]);
  useEffect(() => {
    setTimeout(() => {
      setFormData(_formData);
    }, 500);
  }, []);
  return (
    <div className={"page-body-container"}>
      <h2>Race Form Downloads</h2>
      {formData?.length ? (
        <div>
          {formData.map((formDataItem: FormGroup, formItemIndex: number) => (
            <div key={formItemIndex}>
              {formDataItem?.formEntries?.length ? (
                <div>
                  <h4 style={{ padding: "1rem 0" }}>{formDataItem.title}</h4>
                  <ListGroup>
                    {formDataItem?.formEntries.map(
                      (formDataItem: FormData, formDataItemIndex: number) => (
                        <ListGroup.Item key={formDataItemIndex}>
                          <a
                            target={"_blank"}
                            rel="noopener noreferrer"
                            href={formDataItem.downloadUrl}
                          >
                            <Image
                              src={PdfIcon}
                              style={{ padding: "0 10px" }}
                            />
                            {formDataItem.label} - ({formDataItem.language})
                          </a>
                        </ListGroup.Item>
                      )
                    )}
                  </ListGroup>
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export { FormDownloadsPage };
