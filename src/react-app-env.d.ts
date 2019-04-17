/// <reference types="react-scripts" />
import { SyntheticEvent, FormEvent } from 'react';

export type ElementEvent<E> = {
  target: E
} & SyntheticEvent;

export type FormElementEvent = {
  target: E
} & FormEvent;

export type InputEvent = ElementEvent<HTMLInputElement>;