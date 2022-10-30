declare namespace RageEnums.Voice {
	namespace BASSFX {
		const enum FxType {
			BASS_FX_DX8_CHORUS = 0,
			BASS_FX_DX8_COMPRESSOR = 1,
			BASS_FX_DX8_DISTORTION = 2,
			BASS_FX_DX8_ECHO = 3,
			BASS_FX_DX8_FLANGER = 4,
			BASS_FX_DX8_GARGLE = 5,
			BASS_FX_DX8_I3DL2REVERB = 6,
			BASS_FX_DX8_PARAMEQ = 7,
			BASS_FX_DX8_REVERB = 8,
			BASS_FX_VOLUME = 9,

			BASS_FX_BFX_PEAK_EQ = 65540,
			BASS_FX_BFX_BQF = 65555
		}
	
		const enum Phase {
			/**
			 * Phase differential between left and right LFOs (-180)
			 */
			BASS_DX8_PHASE_NEG_180 = 0,
			/**
			 * Phase differential between left and right LFOs (-90)
			 */
			BASS_DX8_PHASE_NEG_90 = 1,
			/**
			 * Phase differential between left and right LFOs (+/-0)
			 */
			BASS_DX8_PHASE_ZERO = 2,
			/**
			 * Phase differential between left and right LFOs (+90)
			 */
			BASS_DX8_PHASE_90 = 3,
			/**
			 * 	Phase differential between left and right LFOs (+180)
			 */
			BASS_DX8_PHASE_180 = 4
		}
	
		const enum Channel {
			/**
			 * All channels at once. Usually default
			 */
			BASS_BFX_CHANALL = -1,
			/* Disables an effect for all channels. */
			BASS_BFX_CHANNONE = 0,
			/* Left-front channel */
			BASS_BFX_CHAN1 = 1,
			/* Right-front channel */
			BASS_BFX_CHAN2 = 2,
			BASS_BFX_CHAN3 = 4,
			BASS_BFX_CHAN4 = 8,
			BASS_BFX_CHAN5 = 16,
			BASS_BFX_CHAN6 = 32,
			BASS_BFX_CHAN7 = 64,
			BASS_BFX_CHAN8 = 128,
		}

		const enum BiQuadFilter {
			BASS_BFX_BQF_LOWPASS = 0,
			BASS_BFX_BQF_HIGHPASS,
			/**
			 * constant 0 dB peak gain
			 */
			BASS_BFX_BQF_BANDPASS,
			/**
			 * constant skirt gain, peak gain = Q
			 */
			BASS_BFX_BQF_BANDPASS_Q,
			BASS_BFX_BQF_NOTCH,
			BASS_BFX_BQF_ALLPASS,
			BASS_BFX_BQF_PEAKINGEQ,
			BASS_BFX_BQF_LOWSHELF,
			BASS_BFX_BQF_HIGHSHELF
		}
	}
}

declare namespace RageEnums {
	namespace Voice {
		export import BASSFxEffectType = RageEnums.Voice.BASSFX.FxType;
		export import BASSFxPhase = RageEnums.Voice.BASSFX.Phase;
		export import BASSFxChan = RageEnums.Voice.BASSFX.Channel;
		export import BASSFxBQF = RageEnums.Voice.BASSFX.BiQuadFilter
	}
}
