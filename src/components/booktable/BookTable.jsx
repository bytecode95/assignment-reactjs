import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

function BookTable() {
  return (
    <>
      <div>
        <div className="bg-white p-2">
          <div className="flex justify-between gap-3 mb-4">
            <Form.Select>
              <option>Please Select</option>
            </Form.Select>
            <Form.Select>
              <option>Please Select</option>
            </Form.Select>
          </div>
          <div className="flex justify-between gap-3 mb-4">
            <Form.Select>
              <option>Please Select</option>
            </Form.Select>
            <Form.Select>
              <option>Please Select</option>
            </Form.Select>
            <Form.Select>
              <option>Please Select</option>
            </Form.Select>
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>PRODUCT</th>
                <th>QUANTITY</th>
                <th>UNIT PRICE</th>
                <th>LINE PRICE</th>
              </tr>
            </thead>
            <tbody className="text-center">Please Select Product Item</tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default BookTable;
