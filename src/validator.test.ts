import { describe, it, expect } from 'vitest'
import { Schema, Effect, Exit } from 'effect'
import { Url, Email, CountryCode, Date } from './validator'

describe('Url', () => {
    it('validates a correct url', () => {
        const url = "https://www.google.com"
        const result = Effect.runSync(Schema.decode(Url)(url))
        expect(result).toEqual(url)
    })

    it('invalidates an incorrect url', () => {
        const url = "bad-url"
        const exit = Effect.runSyncExit(Schema.decode(Url)(url))
        expect(Exit.isFailure(exit)).toBe(true)
    })
})

describe('Email', () => {
    it('validates a correct email', () => {
        const email = "test@example.com"
        const result = Effect.runSync(Schema.decode(Email)(email))
        expect(result).toEqual(email)
    })

    it('invalidates an incorrect email', () => {
        const email = "bad-email"
        const exit = Effect.runSyncExit(Schema.decode(Email)(email))
        expect(Exit.isFailure(exit)).toBe(true)
    })
})

describe('CountryCode', () => {
    it('validates a correct country code', () => {
        const countryCode = "fr"
        const result = Effect.runSync(Schema.decode(CountryCode)(countryCode))
        expect(result).toEqual(countryCode)
    })

    it('invalidates an incorrect country code', () => {
        const countryCode = "bad-country-code"
        const exit = Effect.runSyncExit(Schema.decode(CountryCode)(countryCode))
        expect(Exit.isFailure(exit)).toBe(true)
    })
})

describe('Date', () => {
    it('validates a correct date with year, month and day', () => {
        const date = "2021-01-01"
        const result = Effect.runSync(Schema.decode(Date)(date))
        expect(result).toEqual(date)
    })

    it('validates a correct date with year and month', () => {
        const date = "2021-01"
        const result = Effect.runSync(Schema.decode(Date)(date))
        expect(result).toEqual(date)
    })

    it('validates a correct date with year', () => {
        const date = "2021"
        const result = Effect.runSync(Schema.decode(Date)(date))
        expect(result).toEqual(date)
    })

    it('invalidates an incorrect date', () => {
        const date = "bad-date"
        const exit = Effect.runSyncExit(Schema.decode(Date)(date))
        expect(Exit.isFailure(exit)).toBe(true)
    })
})
