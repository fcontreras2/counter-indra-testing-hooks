import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import useCounterActions from "./useCounterActios";

describe("Comportamiento del hooks", () => {

  test("Verificar el estado inicial en cero", () => {
    const { result } = renderHook(() => useCounterActions());
    
    expect(result.current.counter).toBe(0)
  });

  test("Verificar función incrementar", () => {
    const { result } = renderHook(() => useCounterActions());
    
    act(() => {
      result.current.increment();
    })

    expect(result.current.counter).toBe(1)
  });

  test("Verificar función decrementar", () => {
    const { result } = renderHook(() => useCounterActions());
    
    act(() => {
      result.current.decrement();
    })

    expect(result.current.counter).toBe(-1)
  });

  test("Verificar función reset", () => {
    const { result } = renderHook(() => useCounterActions());
    
    act(() => {
      result.current.increment();
      result.current.reset();
    })

    expect(result.current.counter).toBe(0);

    act(() => {
      result.current.decrement();
      result.current.reset();
    })

    expect(result.current.counter).toBe(0);
  });
})