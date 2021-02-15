import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from 'react';

import api from '../services/api';

export interface Response {
  response: ResponseStatus;
}

export interface Invests {
  nome: string;
  objetivo: string;
  saldoTotalDisponivel: number;
  indicadorCarencia: 'N' | 'S';
  acoes: Action[];
}

interface ResponseStatus {
  status: number;
  data: {listaInvestimentos: Invests[]};
}

interface Action {
  id: string;
  nome: string;
  percentual: number;
  valor: number;
}

interface ActionContextData {
  setActions(actions: Omit<Action, 'valor'>[]): void;
  updateActions(action: Action): void;
  total: number;
  investActions: Action[];
  investments: Invests[];
  loading: boolean;
}

const ActionContext = createContext<ActionContextData>({} as ActionContextData);

const ActionProvider: React.FC = ({children}) => {
  const [investments, setInvestments] = useState<Invests[]>([]);
  const [investActions, setInvestActions] = useState<Action[]>([]);
  const [total, setTotal] = useState(0);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get<Response>('5e76797e2f0000f057986099').then((response) => {
      setInvestments(response.data.response.data.listaInvestimentos);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    let actionTotal = investActions.reduce((acc, acao) => {
      return acc + (acao.valor || 0);
    }, 0);

    setTotal(actionTotal);
  }, [investActions]);

  const setActions = useCallback((actions: Action[]) => {
    setInvestActions(
      actions.map((action) => {
        return {
          ...action,
          valor: 0,
        };
      }),
    );
  }, []);

  const updateActions = useCallback(
    (action) => {
      setInvestActions(
        investActions.map((invest) =>
          invest.id === action.id ? action : invest,
        ),
      );
    },
    [investActions],
  );

  return (
    <ActionContext.Provider
      value={{
        investments,
        loading,
        setActions,
        updateActions,
        total,
        investActions,
      }}>
      {children}
    </ActionContext.Provider>
  );
};

function useAction(): ActionContextData {
  const context = useContext(ActionContext);

  if (!context) {
    throw new Error('useAction must be used within a ActionProvider');
  }

  return context;
}

export {ActionProvider, useAction};
