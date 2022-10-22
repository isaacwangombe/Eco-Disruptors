import React from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";

const Profile = ({ user }) => {
  return (
    <div>
      <section class="pt-16 bg-blueGray-50">
        <div class="w-full lg:w-4/12 px-4 mx-auto">
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
            <div class="px-6">
              <div class="flex flex-wrap justify-center">
                <div class="w-full px-4 flex justify-center">
                  <div class="relative">
                    <img
                      alt="..."
                      src="https://images.unsplash.com/photo-1541911087797-f89237bd95d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                      class="shadow-xl rounded-full h-auto align-middle border-none  -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                    />
                  </div>
                </div>
                <div class="w-full px-4 text-center mt-20">
                  <div class="flex justify-center py-4 lg:pt-4 pt-8">
                    <div class="lg:mr-4 p-3 text-center">
                      <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        25
                      </span>
                      <span class="text-sm text-blueGray-400">
                        Items Disposed
                      </span>
                    </div>
                    <div class="mr-4 p-3 text-center">
                      <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        22
                      </span>
                      <span class="text-sm text-blueGray-400">
                        Coins earned
                      </span>
                    </div>
                    <div class="mr-4 p-3 text-center">
                      <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        1032 Kes
                      </span>
                      <span class="text-sm text-blueGray-400">Income</span>
                    </div>

                    <div class="lg:mr-4 p-3 text-center">
                      <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        1032 Kes
                      </span>
                      <span class="text-sm text-blueGray-400">Comments</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center mt-12">
                <h3 class="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                  {user.username}
                </h3>
              </div>
              <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="overflow-x-auto">
                  <h2>Items Sold</h2>
                  <table className="table w-full">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Item</th>
                        <th>date</th>
                        <th>Quantity</th>
                        <th>Income</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>1</th>
                        <td>phone</td>
                        <td>24/5/2022</td>
                        <td>1 pc</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <th>2</th>

                        <td>laptop</td>
                        <td>24/2/2022</td>
                        <td>1 pc</td>
                        <td>5</td>
                      </tr>
                      <tr>
                        <th>3</th>

                        <td>hard disk</td>
                        <td>24/5/2022</td>
                        <td>3 pc</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <th>4</th>

                        <td>phone</td>
                        <td>24/5/2022</td>
                        <td>1 pc</td>
                        <td>3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="overflow-x-auto">
                  <h2>Items Disposed of</h2>
                  <table className="table w-full">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Item</th>
                        <th>category</th>
                        <th>date</th>
                        <th>Quantity</th>
                        <th>Income</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>1</th>
                        <td>creative house art</td>
                        <td>art</td>
                        <td>24/5/2022</td>
                        <td>1 pc</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <th>2</th>

                        <td>recycled necklace</td>
                        <td>jewelry</td>
                        <td>24/2/2022</td>
                        <td>1 pc</td>
                        <td>5</td>
                      </tr>
                      <tr>
                        <th>3</th>

                        <td>house sculpture</td>
                        <td>Art</td>
                        <td>24/5/2022</td>
                        <td>3 pc</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <th>4</th>

                        <td>recycled chair</td>
                        <td>furniture</td>
                        <td>24/5/2022</td>
                        <td>1 pc</td>
                        <td>3</td>
                      </tr>
                      <tr className="active">
                        <td>2</td>
                        <td>furniture</td>
                        <td>Desktop Support Technician</td>
                        <td>Purple</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>jewelry</td>
                        <td>Tax Accountant</td>
                        <td>Red</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer class="relative  pt-8 pb-6 mt-8">
          <div class="container mx-auto px-4">
            <div class="flex flex-wrap items-center md:justify-between justify-center">
              <div class="w-full md:w-6/12 px-4 mx-auto text-center">
                <div class="text-sm text-blueGray-500 font-semibold py-1">
                  Made with{" "}
                  <a
                    href="https://www.creative-tim.com/product/notus-js"
                    class="text-blueGray-500 hover:text-gray-800"
                    target="_blank"
                  >
                    Notus JS
                  </a>{" "}
                  by{" "}
                  <a
                    href="https://www.creative-tim.com"
                    class="text-blueGray-500 hover:text-blueGray-800"
                    target="_blank"
                  >
                    {" "}
                    Creative Tim
                  </a>
                  .
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default withAuthenticator(Profile);
