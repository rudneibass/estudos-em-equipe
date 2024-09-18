import axios from 'axios';
import { ReactNode } from "react";

export type LaravelPaginationLinksType = {
  url: string | null;
  label: string;
  active: boolean;
}

type PaginationBarType = {
  data: { paginationLinks: LaravelPaginationLinksType[] | undefined },
  actions?: { handlePaginateAction: ({ data, paginationLinks }: { data:[], paginationLinks: LaravelPaginationLinksType[] }) => void },
  additionalComponents?: Array<ReactNode>
}

export default function index({data, actions} : PaginationBarType) {

  async function handlePaginate(url: string) {
    if(actions?.handlePaginateAction){
      if (url){
        try {
          const response = await axios.get(url);
          actions.handlePaginateAction({data: response.data.data, paginationLinks: response.data.links});
        } catch (error) {
          console.error(error);
          throw new Error(`Erro ao tentar obter dados de ${url}`);
        }
      }
    }
  }

  return (
    <section className="mt-3">
      <div className="d-flex justify-content-between p-1">
        <small>Registros por página: 10</small>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            {data.paginationLinks &&
              data.paginationLinks.length > 0 &&
              data.paginationLinks.map((item, index) => (
                <li key={index} className="page-item">
                  <a
                    className="page-link"
                    onClick={() => handlePaginate(item.url || "")}
                    dangerouslySetInnerHTML={{ __html: item.label }}
                    style={{ whiteSpace: "nowrap", color: "gray" }}
                  ></a>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
