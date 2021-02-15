import {renderHook, act} from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';

import {useAction, ActionProvider} from '../../hooks/action';
import api from '../../services/api';

const apiMock = new MockAdapter(api);

jest.useFakeTimers();

describe('Action hook', () => {
  it('should be able to setActions', async () => {
    const apiResponse = {
      response: {
        status: '200',
        data: {
          listaInvestimentos: [
            {
              nome: 'INVESTIMENTO I',
              objetivo: 'Minha aposentadoria',
              saldoTotalDisponivel: 39321.29,
              indicadorCarencia: 'N',
              acoes: [
                {
                  id: '1',
                  nome: 'BBAS3',
                  percentual: 28.1,
                },
              ],
            },
          ],
        },
      },
    };
    apiMock.onGet('5e76797e2f0000f057986099').replyOnce(200, apiResponse);

    const {result, waitForNextUpdate} = renderHook(() => useAction(), {
      wrapper: ActionProvider,
    });

    act(() =>
      result.current.setActions([
        {
          id: '1',
          nome: 'BBAS3',
          percentual: 28.1,
        },
      ]),
    );

    await waitForNextUpdate();

    expect(result.current.investActions).toEqual([
      {
        id: '1',
        nome: 'BBAS3',
        percentual: 28.1,
        valor: 0,
      },
    ]);
  });

  it('should be able to updateActions', async () => {
    const apiResponse = {
      response: {
        status: '200',
        data: {
          listaInvestimentos: [
            {
              nome: 'INVESTIMENTO I',
              objetivo: 'Minha aposentadoria',
              saldoTotalDisponivel: 39321.29,
              indicadorCarencia: 'N',
              acoes: [
                {
                  id: '1',
                  nome: 'BBAS3',
                  percentual: 28.1,
                },
              ],
            },
          ],
        },
      },
    };
    apiMock.onGet('5e76797e2f0000f057986099').replyOnce(200, apiResponse);

    const {result, waitForNextUpdate} = renderHook(() => useAction(), {
      wrapper: ActionProvider,
    });

    act(() =>
      result.current.setActions([
        {
          id: '1',
          nome: 'BBAS3',
          percentual: 28.1,
        },
      ]),
    );

    act(() =>
      result.current.updateActions({
        id: '1',
        nome: 'BBAS3',
        percentual: 28.1,
        valor: 40,
      }),
    );

    await waitForNextUpdate();

    expect(result.current.investActions).toEqual([
      {
        id: '1',
        nome: 'BBAS3',
        percentual: 28.1,
        valor: 40,
      },
    ]);
  });
});
