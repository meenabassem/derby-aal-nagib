import React, {useEffect, useState} from "react";
import "App.scss";
import {Image, ListGroup} from "react-bootstrap";
import PdfIcon from "assets/img/pdficon.png";
import {NetworkHelper} from "modules/network/NetworkHelper";

interface FormData {
  language?: string;
  label?: string;
  downloadUrl: string;
}
interface FormGroup {
  title: string;
  formEntries: FormData[];
}
const FormDownloadsPage = () => {
  const [formData, setFormData] = useState<FormGroup[]>([]);

  useEffect(() => {
    NetworkHelper.post("/Lookups", {
      Lookups: ["Form_Downloads"]
    })
      .then(value => {
        if (value.data?.Form_Downloads?.length) {
          setFormData(value.data.Form_Downloads);
        }
      })
      .catch(reason => {
        console.log("Failed to load Forms and downloads", reason);
      });
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
